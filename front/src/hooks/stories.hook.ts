import { useState } from 'react';
import { Story } from 'react-insta-stories/dist/interfaces';
import { StoryResponse } from '../interfaces/story-response.interface';
import { storyBuilder } from '../services/story-builder.service';
import { useFetch } from './fetch.hook';

export function useStories(username: string): Story[] {
    const url = `https://gb04wxeoel.execute-api.eu-west-1.amazonaws.com/dev/betclic/stories?username=${username}`;
    const [stories, setStories] = useState<Story[]>([]);

    let { data } = useFetch<StoryResponse>(url);
    if (data?.length && !stories.length) {
        setStories(storyBuilder(data));
    }

    return stories;
}
