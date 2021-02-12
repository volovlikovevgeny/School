export const valid = (name: string, email: string, password: string, cf_password: string): string => {
    if (!name || !email || !password) {
        return 'Please add all fields';
    }

    if (!validateEmail(email)) {
        return 'Please Enter valid email';
    }

    if (password.length < 6) {
        return 'Password must have at least 6 characters';
    }

    if (password !== cf_password) {
        return 'Passwords don`t match';
    }
};

export const validateEmail = (email: string):boolean=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};



