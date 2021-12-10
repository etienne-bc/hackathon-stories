import React from 'react';
import './luckiest-win-list-story.component.css';

interface Wins {
    LUCKIEST_TEAM_1: string;
    WIN_RATE_LUCKIEST_TEAM_1: number;
    LUCKIEST_TEAM_2: string;
    WIN_RATE_LUCKIEST_TEAM_2: number;
    LUCKIEST_TEAM_3: string;
    WIN_RATE_LUCKIEST_TEAM_3: number;
    LUCKIEST_TEAM_4: string;
    WIN_RATE_LUCKIEST_TEAM_4: number;
    LUCKIEST_TEAM_5: string;
    WIN_RATE_LUCKIEST_TEAM_5: number;
}

export const LuckiestWinListStory = ({ wins }: { wins: Wins }) => {
    return (
        <div className="listComponent">
            <div>
                Tes équipes
                <br />
                <span className="yellow">porte bonheur</span>
            </div>
            <div className="list xs">
                <div>
                    <div>1. {wins.LUCKIEST_TEAM_1}</div>
                    <div className="yellow">{wins.WIN_RATE_LUCKIEST_TEAM_1}&nbsp;%</div>
                </div>
                {wins.WIN_RATE_LUCKIEST_TEAM_2 !== 0 && (
                    <div>
                        <div>2. {wins.LUCKIEST_TEAM_2}</div>
                        <div className="yellow">{wins.WIN_RATE_LUCKIEST_TEAM_2}&nbsp;%</div>
                    </div>
                )}
                {wins.WIN_RATE_LUCKIEST_TEAM_3 !== 0 && (
                    <div>
                        <div>3. {wins.LUCKIEST_TEAM_3}</div>
                        <div className="yellow">{wins.WIN_RATE_LUCKIEST_TEAM_3}&nbsp;%</div>
                    </div>
                )}
                {wins.WIN_RATE_LUCKIEST_TEAM_4 !== 0 && (
                    <div>
                        <div>4. {wins.LUCKIEST_TEAM_4}</div>
                        <div className="yellow">{wins.WIN_RATE_LUCKIEST_TEAM_4}&nbsp;%</div>
                    </div>
                )}
                {wins.WIN_RATE_LUCKIEST_TEAM_5 !== 0 && (
                    <div>
                        <div>5. {wins.LUCKIEST_TEAM_5}</div>
                        <div className="yellow">{wins.WIN_RATE_LUCKIEST_TEAM_5}&nbsp;%</div>
                    </div>
                )}
            </div>
        </div>
    );
};
