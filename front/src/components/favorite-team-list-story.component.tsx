import React from 'react';
import './favorite-team-list-story.component.css';

export const FavoriteTeamListStory = ({ teams }: { teams: { TEAM: string; NB_BET: number }[] }) => {
    return (
        <div className="favoriteTeamListStory">
            <div>
                Les équipes que tu voyais <span className="yellow">le + gagner</span> en 2021
            </div>
            <div className="list xs">
                {teams.map((team, index) => (
                    <div key={index}>
                        <div>
                            {index + 1}. {team.TEAM}
                        </div>
                        <div className="yellow">
                            {team.NB_BET} <span className="xxs">paris</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
