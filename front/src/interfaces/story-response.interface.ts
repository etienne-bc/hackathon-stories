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

export type StoryResponse = Array<IntroStory | FavoriteTeamStory | FavoriteTeamListStory>;
