import React from 'react';
import './luckiest-win-story.component.css';

export const LuckiestWinStory = ({ team, rate }: { team: string; rate: number }) => {
    return (
        <div className="single">
            <div>
                <img src="/trefle.svg" alt="heart" />
            </div>
            <div className="xs">Ton équipe porte bonheur</div>
            <div className="yellow xl">{team}</div>
            <div className="l">
                <span className="yellow">{rate}&nbsp;%</span> DE TES PARIS GAGNÉS
            </div>
        </div>
    );
};
