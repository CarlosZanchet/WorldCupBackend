import { users } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { IBolao } from "../findByUser/FindBolaoByUserUseCase";

export class FindBoloesUseCase {
  async execute() {
    
    const result = await prisma.bolao.findMany({
      include: {
        user_create: true,
        users: {
          include: {
            users: true
          }
        }
      }
    })


    const boloesUser: IBolao[] = result.map((bol) => {
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