import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Stories from 'react-insta-stories';
import Loader from 'react-loader-spinner';
import './App.css';
import { useStories, useQueryParams } from './hooks';
import configuration from './config/configuration';
import { Username } from './components/username.component';

function App() {
    const user = useQueryParams(configuration.userQueryParam);
    const stories = useStories(user);
    if (!user) return <Username />;
    if (!stories.length)
        return (
            <div className="loader">
                <Loader type="Puff" color="#d2161e" height={100} width={100} />
            </div>
        );

    return (
        <>
            <Stories stories={stories} defaultInterval={6000} width={'100vw'} height={'100vh'} />;
            <audio autoPlay={true} src="/win.mp3"></audio>
        </>
    );
}

export default App;
