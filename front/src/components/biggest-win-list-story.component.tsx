import React from 'react';
import './biggest-win-list-story.component.css';

interface Wins {
    BIGGEST_WIN_1: number;
    DATE_BIGGEST_WIN_1: string;
    NB_SELECTION_BIGGEST_WIN_1: number;
    BIGGEST_WIN_2: number;
    DATE_BIGGEST_WIN_2: string;
    NB_SELECTION_BIGGEST_WIN_2: number;
    BIGGEST_WIN_3: number;
    DATE_BIGGEST_WIN_3: string;
    NB_SELECTION_BIGGEST_WIN_3: number;
    BIGGEST_WIN_4: number;
    DATE_BIGGEST_WIN_4: string;
    NB_SELECTION_BIGGEST_WIN_4: number;
    BIGGEST_WIN_5: number;
    DATE_BIGGEST_WIN_5: string;
    NB_SELECTION_BIGGEST_WIN_5: number;
}

export const BiggestWinListStory = ({ wins }: { wins: Wins }) => {
    const getLabel = (nbSelection: number) =>
        nbSelection === 1 ? 'Pari simple' : `Combiné de ${nbSelection} sélections`;

    return (
        <div className="listComponent">
            <div>
                Tes <span className="yellow">plus gros gains</span>
                <br />
                cette année
            </div>
            <div className="list xs">
                <div>
                    <div>1. {getLabel(wins.NB_SELECTION_BIGGEST_WIN_1)}</div>
                    <div className="yellow">{wins.BIGGEST_WIN_1}&nbsp;€</div>
                </div>
                {wins.BIGGEST_WIN_2 !== 0 && (
                    <div>
                        <div>2. {getLabel(wins.NB_SELECTION_BIGGEST_WIN_2)}</div>
                        <div className="yellow">{wins.BIGGEST_WIN_2}&nbsp;€</div>
                    </div>
                )}
                {wins.BIGGEST_WIN_3 !== 0 && (
                    <div>
                        <div>3. {getLabel(wins.NB_SELECTION_BIGGEST_WIN_3)}</div>
                        <div className="yellow">{wins.BIGGEST_WIN_3}&nbsp;€</div>
                    </div>
                )}
                {wins.BIGGEST_WIN_4 !== 0 && (
                    <div>
                        <div>4. {getLabel(wins.NB_SELECTION_BIGGEST_WIN_4)}</div>
                        <div className="yellow">{wins.BIGGEST_WIN_4}&nbsp;€</div>
                    </div>
                )}
                {wins.BIGGEST_WIN_5 !== 0 && (
                    <div>
                        <div>5. {getLabel(wins.NB_SELECTION_BIGGEST_WIN_5)}</div>
                        <div className="yellow">{wins.BIGGEST_WIN_5}&nbsp;€</div>
                    </div>
                )}
            </div>
        </div>
    );
};
