
import {userTransformer} from "~/server/transformers/user";
import {createUser} from "~/server/DB/users";
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {username, email, password, repeatPassword, name} = body;
  if (!username || !email || !password || !repeatPassword || !name)
  {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "Invalid Params",
      stack: body
    }))
  }

  if (password != repeatPassword)
  {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: "The passwords do not match"
    }))
  }

  const userData = {
    username, email, password, name, profileImage: "https://picsum.photos/200/200"
  }
  const user = await createUser(userData)
  return {
    body: userTransformer(user)
  }

})
