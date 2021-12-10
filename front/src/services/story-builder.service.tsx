import React from 'react';
import { Story } from 'react-insta-stories/dist/interfaces';
import { StoryResponse } from '../interfaces/story-response.interface';
import { StoryTypeEnum } from '../enums/story-type.enum';
import { IntroStory } from '../components/intro-story.component';
import { FavoriteTeamStory } from '../components/favorite-team-story.component';
//import { FavoriteTeamListStory } from '../components/favorite-team-list-story.component';

export function storyBuilder(data: StoryResponse): Story[] {
    return data.map(story => {
        switch (story.cardType) {
            case StoryTypeEnum.Intro:
                return {
                    content: () => <IntroStory firstname={story.firstname} />,
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
            /*
            case StoryTypeEnum.FavoriteTeamList:
                return {
                    content: () => <FavoriteTeamListStory teams={story.payload} />,
                };
*/
            default:
                return {
                    content: () => <div>unknown card</div>,
                };
        }
    });
}
