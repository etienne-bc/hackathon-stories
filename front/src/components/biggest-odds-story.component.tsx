import React from 'react';
import './biggest-odds-story.component.css';

export const BiggestOddsStory = ({ odds, date, selection }: { date: string; odds: number; selection: number }) => {
    return (
        <div className="single">
            <div>
                <img src="/cible.svg" alt="heart" />
            </div>
            <div className="xs">Ta plus grosse côte gagnante</div>
            <div className="odd xl">{odds}</div>
            <div className="xs">Tu dois encore t'en souvenir</div>
            <div className="xs">C'était le {date}</div>
            <div className="xs">
                sur un combiné de <span className="yellow">{selection} sélections</span>
            </div>
        </div>
    );
};