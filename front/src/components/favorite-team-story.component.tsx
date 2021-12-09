import React from 'react';
import './favorite-team-story.component.css';

export const FavoriteTeamStory = ({ team, count }: { team: string; count: number }) => {
    return (
        <div className="favoriteTeamStory">
            <div>
                <img src="/heart.svg" alt="heart" />
            </div>
            <div>Ton équipe de cœur</div>
            <div className="xl">{team}</div>
            <div className="yellow xl">
                <span className="xxl">{count}</span>
                PARIS
            </div>
        </div>
    );
};
