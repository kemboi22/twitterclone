import {getRefreshTokenByToken} from "~/server/DB/refreshToken";
import {decodeRefreshToken, generateTokens} from "~/server/Utils/JWT";
import {getUserById} from "~/server/DB/users";

export default defineEventHandler(async (event) => {

    const cookies = getCookie(event, "refresh_token")
    if (!cookies)
    {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh token is invalid"
        }))
    }

    const refreshToken = await getRefreshTokenByToken(cookies)
    const token = await decodeRefreshToken(refreshToken.token)
    try {
        const user = await getUserById(token.userId)
        const {accessToken} = generateTokens(user)
        return {accessToken: accessToken}
    }catch (e) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: "Something went wrong"
        }))
    }
})