

interface User {
    username: string,
    password: string
}
export default () => {

    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')

    const setToken = (newToken: string) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser: unknown) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }
    const login = async (user: User) => {
        try {
            console.log(user)
            const data = await $fetch('/api/auth/login', {
                method: "POST",
                body: {
                    username: user.username,
                    password: user.password
                }
            })
            setToken(data.access_token)
            setUser(data.user)
        }catch (e) {

        }
    }

    return {
        login,
        useAuthUser
    }
}