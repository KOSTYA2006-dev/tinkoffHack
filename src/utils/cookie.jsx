import Cookies from 'js-cookie';

export const setAuthCookie = (token) => {
    console.log('Setting auth cookie with token:', token);  // Добавим логирование для отладки
    Cookies.set('jwtToken', token, { expires: 7 });
};


export const getAuthCookie = () => {
    return Cookies.get('jwtToken');
};

export const removeAuthCookie = () => {
    Cookies.remove('jwtToken');
};
