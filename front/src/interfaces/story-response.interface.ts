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
    payload: { team: string; count: number };
}

export type StoryResponse = Array<IntroStory | FavoriteTeamStory>;
