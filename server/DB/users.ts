import { prisma } from "~/server/DB/index";
// @ts-ignore
import bcrypt from "bcrypt"
interface Login {
    
}
interface User {
    name?: String,
    email: String,
    username: String,
    password: String,
    profileImage?: String
}

export const createUser = (userdata: User) => {
    const finalUserData = {
        ...userdata,
        password: bcrypt.hashSync(userdata.password, 10)
    }
    return prisma.user.create({
        data: userdata
    })
}

export const getUserByUserName = (username: String) => {
    return prisma.user.findUnique({
        where: {
            username
        }
    })

}