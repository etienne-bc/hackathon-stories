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
import { LuckiestWinStory } from '../components/luckiest-win-story.component';
import { LuckiestWinListStory } from '../components/luckiest-win-list-story.component';
import { BiggestOddsStory } from '../components/biggest-odds-story.component';
import { BiggestOddsListStory } from '../components/biggest-odds-list-story.component';
import { BestDayStory } from '../components/best-day-story.component';
import { BestDayListStory } from '../components/best-day-list-story.component';
import { ThanksStory } from '../components/thanks-story.component';

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
            case StoryTypeEnum.LuckiestWin:
                return {
                    content: () => (
                        <LuckiestWinStory
                            team={story.payload.LUCKIEST_TEAM_1}
                            rate={story.payload.WIN_RATE_LUCKIEST_TEAM_1}
                        />
                    ),
                };
            case StoryTypeEnum.LuckiestWinList:
                return {
                    content: () => <LuckiestWinListStory wins={story.payload} />,
                };
            case StoryTypeEnum.BiggestOdds:
                return {
                    content: () => (
                        <BiggestOddsStory
                            odds={story.payload.BIGGEST_ODD_1}
                            date={story.payload.DATE_BIGGEST_ODD_1}
                            selection={story.payload.NB_SELECTION_BIGGEST_ODD_1}
                        />
                    ),
                };
            case StoryTypeEnum.BiggestOddsList:
                return {
                    content: () => <BiggestOddsListStory odds={story.payload} />,
                };
            case StoryTypeEnum.BestDay:
                return {
                    content: () => (
                        <BestDayStory
                            day={story.payload.BEST_DAY_DATE_1}
                            amount={story.payload.BEST_DAY_WIN_AMOUNT_1}
                            bet={story.payload.BEST_DAY_NB_BET_1}
                        />
                    ),
                };
            case StoryTypeEnum.BestDayList:
                return {
                    content: () => <BestDayListStory days={story.payload} />,
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
            case StoryTypeEnum.Thanks:
                return {
                    content: () => <ThanksStory />,
                };

            default:
                return {
                    content: () => <div>unknown card</div>,
                };
        }
    });
}
