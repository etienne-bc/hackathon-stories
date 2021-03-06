import { StoryTypeEnum } from '../enums/story-type.enum';

interface BaseStory {
    cardType: StoryTypeEnum;
    title?: string;
    date?: string;
    firstname: string;
    story?: number;
    username?: string;
    is_read?: boolean;
}

export interface IntroStory extends BaseStory {
    cardType: StoryTypeEnum.Intro;
}

export interface FavoriteTeamStory extends BaseStory {
    cardType: StoryTypeEnum.FavoriteTeam;
    payload: {
        FAVORITE_TEAM_1: string;
        NB_BET_FAVORITE_TEAM_1: number;
    };
}

export interface FavoriteTeamListStory extends BaseStory {
    cardType: StoryTypeEnum.FavoriteTeamList;
    payload: {
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
    };
}

export interface LeastPreferedTeamStory extends BaseStory {
    cardType: StoryTypeEnum.LeastPreferedTeam;
    payload: {
        LEAST_FAVORITE_TEAM_1: string;
        NB_BET_LEAST_FAVORITE_TEAM_1: number;
    };
}

export interface LuckiestWinStory extends BaseStory {
    cardType: StoryTypeEnum.LuckiestWin;
    payload: {
        LUCKIEST_TEAM_1: string;
        WIN_RATE_LUCKIEST_TEAM_1: number;
    };
}

export interface LuckiestWinListStory extends BaseStory {
    cardType: StoryTypeEnum.LuckiestWinList;
    payload: {
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
    };
}

export interface BiggestWinStory extends BaseStory {
    cardType: StoryTypeEnum.BiggestWin;
    payload: {
        BIGGEST_WIN_1: number;
        DATE_BIGGEST_WIN_1: string;
        NB_SELECTION_BIGGEST_WIN_1: number;
    };
}

export interface BiggestWinListStory extends BaseStory {
    cardType: StoryTypeEnum.BiggestWinList;
    payload: {
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
    };
}

export interface BiggestOddsStory extends BaseStory {
    cardType: StoryTypeEnum.BiggestOdds;
    payload: {
        BIGGEST_ODD_1: number;
        DATE_BIGGEST_ODD_1: string;
        NB_SELECTION_BIGGEST_ODD_1: number;
    };
}

export interface BiggestOddsListStory extends BaseStory {
    cardType: StoryTypeEnum.BiggestOddsList;
    payload: {
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
    };
}

export interface BestDayStory extends BaseStory {
    cardType: StoryTypeEnum.BestDay;
    payload: {
        BEST_DAY_DATE_1: string;
        BEST_DAY_WIN_AMOUNT_1: number;
        BEST_DAY_NB_BET_1: number;
    };
}

export interface BestDayListStory extends BaseStory {
    cardType: StoryTypeEnum.BestDayList;
    payload: {
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
    };
}

export interface ThanksStory extends BaseStory {
    cardType: StoryTypeEnum.Thanks;
}

export interface ContentCenter extends BaseStory {
    cardType: StoryTypeEnum.ContentCenter;
    payload: { title: string; image_url: string; text: string; link_text: string; app_link: string; web_link: string };
}

export type StoryResponse = Array<
    | IntroStory
    | FavoriteTeamStory
    | FavoriteTeamListStory
    | LeastPreferedTeamStory
    | LuckiestWinStory
    | LuckiestWinListStory
    | BiggestWinStory
    | BiggestWinListStory
    | BiggestOddsStory
    | BiggestOddsListStory
    | BestDayStory
    | BestDayListStory
    | ContentCenter
    | ThanksStory
>;
