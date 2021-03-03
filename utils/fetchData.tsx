const baseUrl = process.env.BASE_URL;

export const getData = async (url: string): Promise<void> => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
    });
    const data = await res.json();

    return data;
};

export const postData = async (url: string, post: {
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}): Promise<any> => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const data = await res.json();

    return data;
};
