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

export const createUser = async (userdata: User) => {
    const finalUserData = {
        ...userdata,
        password: await bcrypt.hashSync(userdata.password, 10)
    }
    return prisma.user.create({
        data: finalUserData
    })
}

export const getUserByUserName = (username: String) => {
    return prisma.user.findUnique({
        where: {
            username
        }
    })

}

export const getUserById = (userId: string) => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}