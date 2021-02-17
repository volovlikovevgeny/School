const baseUrl = process.env.BASE_URL;

export const getData = async (url: string,token: string) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
    });

    const data = await res.json();
    return data;
};

export const postData = async (url: string, post: { email: string; password: string; name?: string; cf_password?: string; },token:string) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify(post),
    });

    const data = await res.json()
        .catch((err) => console.log(err));

    return data;
};
