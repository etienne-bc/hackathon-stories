import React from 'react';
import { useEffect, useState } from 'react';
import { Story } from 'react-insta-stories/dist/interfaces';

export function useStories(user: string): Story[] {
    const [data, setData] = useState<Story[]>([]);

    useEffect(() => {
        if (!user) {
            return;
        }
        const timer = setTimeout(() => {
            setData([
                {
                    content: () => {
                        return (
                            <img src="https://www.volleypack.fr/wp-content/uploads/2020/01/interview-volleypack-jean-patry-2020-4.jpg" />
                        );
                    },
                },
                {
                    url: 'https://cdn-s-www.dna.fr/images/261B2D20-FE2E-4058-B1FB-28483A2A220D/NW_raw/lucille-gicquel-(a-gauche)-isaline-sager-weider-(n-12)-nina-stojiljkovic-et-les-bleues-defient-la-redoutable-serbie-en-quart-de-finale-de-l-euro-photo-cev-julien-crosnier-1630443976.jpg',
                },
            ]);
        }, 1000);

        return () => clearTimeout(timer);
    }, [user]);

    return data;
}
