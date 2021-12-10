import React from 'react';
import './content-center.component.css';

export const ContentCenter = ({ title, image_url, text }: { title: string; image_url: string; text: string; link_text: string; web_link: string; }) => {
    return (
        <div class="contentCenter">
            <div>
                <img src="{image_url}" alt="actu indispo" width="100%">
            </div>
            <div class="yellow xl">{title}</div>
            <div></div>
            <div>{text}</div>
            <div><a href="{web_link}">{link_text}</a></div>
        </div>
    );
};
