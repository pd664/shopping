export const getUser = () => {}

export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const removeUserSession = () => {}

export const setUserSession = (token, user) => {
    sessionStorage.setItem('token',token)
    sessionStorage.setItem('user', JSON.stringify(user))
}
