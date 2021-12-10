import React from 'react';
import './biggest-odds-list-story.component.css';

interface OddssList {
    BIGGEST_ODD_1: number;
    DATE_BIGGEST_ODD_1: string;
    NB_SELECTION_BIGGEST_ODD_1: number;
    BIGGEST_ODD_2: number;
    DATE_BIGGEST_ODD_2: string;
    NB_SELECTION_BIGGEST_ODD_2: number;
    BIGGEST_ODD_3: number;
    DATE_BIGGEST_ODD_3: string;
    NB_SELECTION_BIGGEST_ODD_3: number;
    BIGGEST_ODD_4: number;
    DATE_BIGGEST_ODD_4: string;
    NB_SELECTION_BIGGEST_ODD_4: number;
    BIGGEST_ODD_5: number;
    DATE_BIGGEST_ODD_5: string;
    NB_SELECTION_BIGGEST_ODD_5: number;
}

export const BiggestOddsListStory = ({ odds }: { odds: OddssList }) => {
    const getLabel = (nbSelection: number) =>
        nbSelection === 1 ? 'Pari simple' : `Combiné de ${nbSelection} sélections`;

    return (
        <div className="listComponent">
            <div>
                Tes <span className="yellow">plus grosses cotes</span>
                <br />
                gagnées cette année
            </div>
            <div className="list xs">
                <div>
                    <div>1. {getLabel(odds.NB_SELECTION_BIGGEST_ODD_1)}</div>
                    <div className="odd">{odds.BIGGEST_ODD_1}</div>
                </div>
                {odds.BIGGEST_ODD_2 !== 0 && (
                    <div>
                        <div>2. {getLabel(odds.NB_SELECTION_BIGGEST_ODD_2)}</div>
                        <div className="odd">{odds.BIGGEST_ODD_2}</div>
                    </div>
                )}
                {odds.BIGGEST_ODD_3 !== 0 && (
                    <div>
                        <div>3. {getLabel(odds.NB_SELECTION_BIGGEST_ODD_3)}</div>
                        <div className="odd">{odds.BIGGEST_ODD_3}</div>
                    </div>
                )}
                {odds.BIGGEST_ODD_4 !== 0 && (
                    <div>
                        <div>4. {getLabel(odds.NB_SELECTION_BIGGEST_ODD_4)}</div>
                        <div className="odd">{odds.BIGGEST_ODD_4}</div>
                    </div>
                )}
                {odds.BIGGEST_ODD_5 !== 0 && (
                    <div>
                        <div>5. {getLabel(odds.NB_SELECTION_BIGGEST_ODD_5)}</div>
                        <div className="odd">{odds.BIGGEST_ODD_5}</div>
                    </div>
                )}
            </div>
        </div>
    );
};
