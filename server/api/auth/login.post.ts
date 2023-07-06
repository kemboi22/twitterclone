import {getUserByUserName} from "~/server/DB/users";
// @ts-ignore
import bcrypt from "bcrypt";
import {generateTokens, sendRefreshToken} from "~/server/Utils/JWT";
import {userTransformer} from "~/server/transformers/user";
import {createRefreshToken} from "~/server/DB/refreshToken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {username, password} = body
  if (!username || !password)
  {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Invalid parameters"
    }))
  }

  // Is the user registered
  const user = await getUserByUserName(username)
  // Compare passwords
  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch)
  {
      return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Wrong credentials"
      }))
  }
  // Generate tokens
  // Access Token
  // Refresh Token
  const {accessToken, refreshToken} = generateTokens(user)

  // Save Inside DB

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  })

  // Add Http Only
  sendRefreshToken(event, refreshToken)

  return {
    user: userTransformer(user),
    access_token: accessToken
  }
})
