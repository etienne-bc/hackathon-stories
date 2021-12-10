import React from 'react';
import { Story } from 'react-insta-stories/dist/interfaces';
import { StoryResponse } from '../interfaces/story-response.interface';
import { ContentCenter } from '../components/content-center.component';
import { StoryTypeEnum } from '../enums/story-type.enum';
import { IntroStory } from '../components/intro-story.component';
import { FavoriteTeamStory } from '../components/favorite-team-story.component';
import { LeastFavoriteTeamStory } from '../components/least-favorite-team-story.component';
import { FavoriteTeamListStory } from '../components/favorite-team-list-story.component';
import { BiggestWinStory } from '../components/biggest-win-story.component';
import { BiggestWinListStory } from '../components/biggest-win-list-story.component';

export function storyBuilder(data: StoryResponse): Story[] {
    return data.map(story => {
        switch (story.cardType) {
            case StoryTypeEnum.Intro:
                return {
                    content: () => <IntroStory />,
                };
            case StoryTypeEnum.FavoriteTeam:
                return {
                    content: () => (
                        <FavoriteTeamStory
                            team={story.payload.FAVORITE_TEAM_1}
                            count={story.payload.NB_BET_FAVORITE_TEAM_1}
                        />
                    ),
                };
            case StoryTypeEnum.FavoriteTeamList:
                return {
                    content: () => <FavoriteTeamListStory teams={story.payload} />,
                };
            case StoryTypeEnum.LeastPreferedTeam:
                return {
                    content: () => (
                        <LeastFavoriteTeamStory
                            team={story.payload.LEAST_FAVORITE_TEAM_1}
                            count={story.payload.NB_BET_LEAST_FAVORITE_TEAM_1}
                        />
                    ),
                };
            case StoryTypeEnum.BiggestWin:
                return {
                    content: () => (
                        <BiggestWinStory
                            win={story.payload.BIGGEST_WIN_1}
                            date={story.payload.DATE_BIGGEST_WIN_1}
                            selection={story.payload.NB_SELECTION_BIGGEST_WIN_1}
                        />
                    ),
                };
            case StoryTypeEnum.BiggestWinList:
                return {
                    content: () => <BiggestWinListStory wins={story.payload} />,
                };
            case StoryTypeEnum.ContentCenter:
                return {
                    content: () => (
                        <ContentCenter
                            title={story.payload.title}
                            image_url={story.payload.image_url}
                            text={story.payload.text}
                            link_text={story.payload.link_text}
                            web_link={story.payload.web_link}
                        />
                    ),
                };
            default:
                return {
                    content: () => <div>unknown card</div>,
                };
        }
    });
}
