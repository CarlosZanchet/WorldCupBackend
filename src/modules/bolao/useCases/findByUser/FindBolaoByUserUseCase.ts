import { users } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export interface IBolao {
  id: string;
  name: string;
  created_at: Date;
  user_create: users;
  type: string;
  users: users[];
  url_image: string;
}

export class FindBolaoByUserUseCase {
  async execute(idUser: string) {
    const result = await prisma.bolao_users.findMany({
      include: {
        bolao: {
          include: {
            user_create: true,
            users: {
              include: {
                users: {
                  include: {
                    results: {
                      include: {
                        game: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      where: {
        id_user: idUser,
      },
    });

    const boloes = result.map((bol) => bol.bolao);

    const boloesUser: IBolao[] = boloes.map((bol) => {
      const users: users[] = bol.users.map((user) => user.users);
      return {
        id: bol.id,
        name: bol.name,
        created_at: bol.created_at,
        user_create: bol.user_create,
        type: bol.type,
        users: users,
        url_image: bol.url_image
      };
    });

    return boloesUser;
  }
}
