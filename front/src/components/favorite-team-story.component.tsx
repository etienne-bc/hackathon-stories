import React from 'react';
import './favorite-team-story.component.css';

export const FavoriteTeamStory = ({ team, count }: { team: string; count: number }) => {
    return (
        <div className="favoriteTeamStory">
            <div>
                <img src="/heart.svg" alt="heart" />
            </div>
            <div className="xs">Ton équipe de cœur</div>
            <div className="l">{team}</div>
            <div className="yellow xl">
                <span className="xxl">{count}</span>&nbsp;PARIS
            </div>
            <div className="xxs">
                Tu as joué le {team} vainqueur à {count} reprises
            </div>
        </div>
    );
};
