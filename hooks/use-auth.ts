import { authApi } from "@/api/auth-api";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export function useAuth(options?: Partial<PublicConfiguration>) {
    // profile
    const { data: profile, error, mutate } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options
    })

    const isFirstLoading = profile === undefined && error === undefined

    const login = async () => {
        await authApi.login({
            username: 'Hai123',
            password: '123abc'
        })

        await mutate() //recall api get profile
    }

    const logout = async () => {
        await authApi.logout()
        await mutate({}, false)
    }

    return {
        profile,
        error,
        login,
        logout,
        isFirstLoading
    }
}