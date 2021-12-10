import React from 'react';
import './biggest-odds-list-story.component.css';
import { dayMonth } from '../services/date.service';

interface Days {
    BEST_DAY_DATE_1: string;
    BEST_DAY_WIN_AMOUNT_1: number;
    BEST_DAY_NB_BET_1: number;
    BEST_DAY_DATE_2: string;
    BEST_DAY_WIN_AMOUNT_2: number;
    BEST_DAY_NB_BET_2: number;
    BEST_DAY_DATE_3: string;
    BEST_DAY_WIN_AMOUNT_3: number;
    BEST_DAY_NB_BET_3: number;
    BEST_DAY_DATE_4: string;
    BEST_DAY_WIN_AMOUNT_4: number;
    BEST_DAY_NB_BET_4: number;
    BEST_DAY_DATE_5: string;
    BEST_DAY_WIN_AMOUNT_5: number;
    BEST_DAY_NB_BET_5: number;
}

export const BestDayListStory = ({ days }: { days: Days }) => {
    return (
        <div className="listComponent">
            <div>
                Tes <span className="yellow">plus grosses journées</span>
                <br />
                en 2021
            </div>
            <div className="list xs">
                <div>
                    <div>1. Le {dayMonth(days.BEST_DAY_DATE_1)}</div>
                    <div className="yellow">{days.BEST_DAY_WIN_AMOUNT_1}&nbsp;€</div>
                </div>
                {days.BEST_DAY_WIN_AMOUNT_2 !== 0 && (
                    <div>
                        <div>2. Le {dayMonth(days.BEST_DAY_DATE_2)}</div>
                        <div className="yellow">{days.BEST_DAY_WIN_AMOUNT_2}&nbsp;€</div>
                    </div>
                )}
                {days.BEST_DAY_WIN_AMOUNT_3 !== 0 && (
                    <div>
                        <div>3. Le {dayMonth(days.BEST_DAY_DATE_3)}</div>
                        <div className="yellow">{days.BEST_DAY_WIN_AMOUNT_3}&nbsp;€</div>
                    </div>
                )}
                {days.BEST_DAY_WIN_AMOUNT_4 !== 0 && (
                    <div>
                        <div>4. Le {dayMonth(days.BEST_DAY_DATE_4)}</div>
                        <div className="yellow">{days.BEST_DAY_WIN_AMOUNT_4}&nbsp;€</div>
                    </div>
                )}
                {days.BEST_DAY_WIN_AMOUNT_5 !== 0 && (
                    <div>
                        <div>5. Le {dayMonth(days.BEST_DAY_DATE_5)}</div>
                        <div className="yellow">{days.BEST_DAY_WIN_AMOUNT_5}&nbsp;€</div>
                    </div>
                )}
            </div>
        </div>
    );
};
