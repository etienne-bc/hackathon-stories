import React from 'react';
import './biggest-win-story.component.css';

export const BiggestWinStory = ({ win, date, selection }: { date: string; win: number; selection: number }) => {
    return (
        <div className="single">
            <div>
                <img src="/slot.svg" alt="heart" />
            </div>
            <div className="xs">Ton plus gros gain</div>
            <div className="yellow xl">
                <span className="xxl">{win}</span>&nbsp;€
            </div>
            <div className="xs">C'était le {date}</div>
            <div className="xs">
                Tu as passé un combiné de <span className="yellow">{selection} sélections</span>
            </div>
        </div>
    );
};
