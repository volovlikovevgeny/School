export const valid = (name: string, email: string, password: string, confirmPassword: string): string | void => {

    if (!name || !email || !password) {
        return 'Please add all fields';
    }
    if (password.length < 6 || password.length > 14) {
        return 'Password must have at least between 6-15 characters';
    }
    if (password !== confirmPassword) {
        return 'Passwords dont`t match!';
    }

    if (!validateEmail(email)) {
        return 'Please enter valid Email';
    }
};

export const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
