import {User} from ".prisma/client";
// @ts-ignore
import jwt from "jsonwebtoken"
import {H3Event} from "h3";

const generateAccessToken = (user: User) => {
    const config = useRuntimeConfig()
    return jwt.sign({userId: user.id}, config.jwtAccessSecret, {
        expiresIn: "10m"
    })

}

const generateRefreshToken = (user: User) => {
    const config = useRuntimeConfig()
    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, {
        expiresIn: "4h"
    })

}
export const generateTokens = (user: User) => {

    return {
        accessToken: generateAccessToken(user),
        refreshToken: generateRefreshToken(user)
    }
}

export const sendRefreshToken = (event: H3Event, token: string) => {
    // @ts-ignore
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })

}

export const decodeRefreshToken = (token: string) => {
    try {
        const config = useRuntimeConfig()

        return jwt.verify(token, config.jwtRefreshSecret)
    }catch (e) {
        return e
    }
}