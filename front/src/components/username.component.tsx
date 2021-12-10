import React, { useState } from 'react';
import { useFetch } from '../hooks';
import './username.component.css';

export const Username = () => {
    const [value, setValue] = useState('');
    const url = `https://gb04wxeoel.execute-api.eu-west-1.amazonaws.com/dev/betclic/users`;

    let { data } = useFetch<string[]>(url);
    let usernames: string[] = [];
    if (data?.length && value) {
        usernames = data
            .filter((username: string) => username.toLowerCase().includes(value.toLowerCase()))
            .filter((_: string, index: number) => index < 10);
    }

    return (
        <div className="username">
            <img src="/Logo.svg" className="logo" alt="logo" />
            <span>Merci de saisir votre username</span>
            <input value={value} onChange={e => setValue(e.target.value)} type="search" />
            <div>
                {usernames.map(username => (
                    <a href={`/index.html?username=${username}`}>{username}</a>
                ))}
            </div>
        </div>
    );
};
