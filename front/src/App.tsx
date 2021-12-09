import React from 'react';
import './App.css';
import Stories from 'react-insta-stories';
import { Story } from 'react-insta-stories/dist/interfaces';

function App() {
    const stories: Story[] = [
        {
            url: 'https://www.volleypack.fr/wp-content/uploads/2020/01/interview-volleypack-jean-patry-2020-4.jpg',
        },
        {
            url: 'https://cdn-s-www.dna.fr/images/261B2D20-FE2E-4058-B1FB-28483A2A220D/NW_raw/lucille-gicquel-(a-gauche)-isaline-sager-weider-(n-12)-nina-stojiljkovic-et-les-bleues-defient-la-redoutable-serbie-en-quart-de-finale-de-l-euro-photo-cev-julien-crosnier-1630443976.jpg',
        },
    ];
    return <Stories stories={stories} defaultInterval={1500} loop={true} width={'100vw'} height={'100vh'} />;
}

export default App;
