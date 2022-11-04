import { games, users } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export interface ISaveResult {
  id: string; 
  home_result: number | null; 
  outside_result: number | null;
  game: games;
  user: users;
}

export class SaveResultUseCase {
  async execute(result: ISaveResult) {

    const home: number = result.home_result as number;
    const outside: number = result.outside_result as number;

    if(home !== null && outside !== null) {
      const resultDb = await prisma.results.update({
        where: {
          id: result.id
        },
        data: {
          home_result: home.toString(),
          outside_result: outside.toString()
        }
      })

      return resultDb
    }
  
    return null;
  }
}