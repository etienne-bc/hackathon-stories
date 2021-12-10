import React from 'react';
import './biggest-win-story.component.css';
import { dayMonth } from '../services/date.service';

export const BiggestWinStory = ({ win, date, selection }: { date: string; win: number; selection: number }) => {
    const getLabel = (nbSelection: number) =>
        nbSelection === 1 ? 'pari simple' : `combiné de ${nbSelection} sélections`;

    return (
        <div className="single">
            <div>
                <img src="/slot.svg" alt="heart" />
            </div>
            <div className="xs">Ton plus gros gain</div>
            <div className="yellow xl">
                <span className="xxl">{win}</span>&nbsp;€
            </div>
            <div className="xs">C'était le {dayMonth(date)}</div>
            <div className="xs">Tu as passé un {getLabel(selection)}</div>
        </div>
    );
};
