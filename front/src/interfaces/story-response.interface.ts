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

export interface ContentCenter extends BaseStory {
    cardType: StoryTypeEnum.ContentCenter;
    payload: { title: string; image_url: string; text: string; link_text: string; app_link: string; web_link: string };
}

export type StoryResponse = Array<
    | IntroStory
    | FavoriteTeamStory
    | FavoriteTeamListStory
    | LeastPreferedTeamStory
    | BiggestWinStory
    | BiggestWinListStory
    | ContentCenter
>;
