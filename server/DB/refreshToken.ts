import {prisma} from "~/server/DB/index";

interface RefreshToken {
    userId: number,
    token: String
}

export const createRefreshToken = (refreshToken: RefreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
  
}

export const getRefreshTokenByToken = (token: string) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}