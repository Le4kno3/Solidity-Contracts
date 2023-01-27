import { BASE_URL } from '../config';

export async function createUser(data: any) {
    console.log(data);
    return fetch(`${BASE_URL}/api/users/user/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function getUser(data: any) {
    console.log(data);
    return fetch(`${BASE_URL}/api/users/user/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function uploadImage(data: any) {
    console.log(data);
    return fetch(`${BASE_URL}/api/users/user/image`, {
        method: 'POST',
        body: data
    });
}
