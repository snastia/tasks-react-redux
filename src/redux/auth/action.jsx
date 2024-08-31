export const register = ({name, email, password}) => {
    return {
        type: '/auth/register',
        payload: {
            name,
            email,
            password
        }
    }
}