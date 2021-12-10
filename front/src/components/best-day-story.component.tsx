import React from 'react';
import './best-day-story.component.css';

export const BestDayStory = ({ day, amount, bet }: { day: string; amount: number; bet: number }) => {
    return (
        <div className="single">
            <div>
                <img src="/calendar.svg" alt="calendar" />
            </div>
            <div className="l">
                le <span className="yellow">{day}</span>
            </div>
            <div className="xs">tu as gagné</div>
            <div className="l yellow">{bet} Paris</div>
            <div className="xs">Pour un montant total de</div>
            <div className="l yellow">{amount}&nbsp;€</div>
        </div>
    );
};
