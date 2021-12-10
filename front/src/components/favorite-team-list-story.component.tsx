import React from 'react';
import './favorite-team-list-story.component.css';

interface Teams {
    FAVORITE_TEAM_1: string;
    NB_BET_FAVORITE_TEAM_1: number;
    FAVORITE_TEAM_2: string;
    NB_BET_FAVORITE_TEAM_2: number;
    FAVORITE_TEAM_3: string;
    NB_BET_FAVORITE_TEAM_3: number;
    FAVORITE_TEAM_4: string;
    NB_BET_FAVORITE_TEAM_4: number;
    FAVORITE_TEAM_5: string;
    NB_BET_FAVORITE_TEAM_5: number;
}

export const FavoriteTeamListStory = ({ teams }: { teams: Teams }) => {
    return (
        <div className="listComponent">
            <div>
                Les équipes que tu voyais
                <br />
                <span className="yellow">le + gagner</span> en 2021
            </div>
            <div className="list xs">
                <div>
                    <div>1. {teams.FAVORITE_TEAM_1}</div>
                    <div className="yellow">
                        {teams.NB_BET_FAVORITE_TEAM_1} <span className="xxs">paris</span>
                    </div>
                </div>
                {teams.NB_BET_FAVORITE_TEAM_2 !== 0 && (
                    <div>
                        <div>2. {teams.FAVORITE_TEAM_2}</div>
                        <div className="yellow">
                            {teams.NB_BET_FAVORITE_TEAM_2} <span className="xxs">paris</span>
                        </div>
                    </div>
                )}
                {teams.NB_BET_FAVORITE_TEAM_3 !== 0 && (
                    <div>
                        <div>3. {teams.FAVORITE_TEAM_3}</div>
                        <div className="yellow">
                            {teams.NB_BET_FAVORITE_TEAM_3} <span className="xxs">paris</span>
                        </div>
                    </div>
                )}
                {teams.NB_BET_FAVORITE_TEAM_4 !== 0 && (
                    <div>
                        <div>4. {teams.FAVORITE_TEAM_4}</div>
                        <div className="yellow">
                            {teams.NB_BET_FAVORITE_TEAM_4} <span className="xxs">paris</span>
                        </div>
                    </div>
                )}
                {teams.NB_BET_FAVORITE_TEAM_5 !== 0 && (
                    <div>
                        <div>5. {teams.FAVORITE_TEAM_5}</div>
                        <div className="yellow">
                            {teams.NB_BET_FAVORITE_TEAM_5} <span className="xxs">paris</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
