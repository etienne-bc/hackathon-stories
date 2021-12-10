import React from 'react';
import './least-favorite-team-story.component.css';

export const LeastFavoriteTeamStory = ({ team, count }: { team: string; count: number }) => {
    return (
        <div className="single">
            <div>
                <img src="/heart-broken.svg" alt="heart" />
            </div>
            <div className="xs">Ton équipe souffre douleur</div>
            <div className="l">{team}</div>
            <div className="yellow xl">
                <span className="xxl">{count}</span>&nbsp;PARIS
            </div>
            <div className="xxs">
                Tu as joué le {team} perdant à {count} reprises
            </div>
        </div>
    );
};
