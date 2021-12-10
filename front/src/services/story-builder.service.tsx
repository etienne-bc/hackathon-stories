import React from 'react';
import { Story } from 'react-insta-stories/dist/interfaces';
import { StoryResponse } from '../interfaces/story-response.interface';
import { ContentCenter } from '../components/content-center.component';
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
<<<<<<< HEAD
            /*
            case StoryTypeEnum.FavoriteTeamList:
                return {
                    content: () => <FavoriteTeamListStory teams={story.payload} />,
                };
*/
||||||| parent of 9a5e31c (Add content Center stories)

=======
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
>>>>>>> 9a5e31c (Add content Center stories)
            default:
                return {
                    content: () => <div>unknown card</div>,
                };
        }
    });
}
