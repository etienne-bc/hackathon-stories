import React, { useEffect, useState } from 'react';
import './intro-story.component.css';

export const IntroStory = () => {
    const [step, setStep] = useState(0);
    useEffect(() => {
        let duration: number;
        if (step === 0) {
            duration = 2500;
        } else if (step === 1) {
            duration = 1500;
        } else {
            duration = 700;
        }
        const interval = setTimeout(() => {
            setStep(step + 1);
        }, duration);
        return () => clearTimeout(interval);
    }, [step]);

    if (step === 0) {
        return (
            <div className="introStory">
                <div>Découvre ton</div>
                <div className="l yellow">RÉCAPITULATIF</div>
                <div>
                    de l'année <span className="yellow">2021</span>
                </div>
            </div>
        );
    }
    if (step === 1) {
        return (
            <div className="introStory">
                <span>Tu es prêt ?</span>
            </div>
        );
    }
    if (step === 2) {
        return (
            <div className="introStory">
                <span className="xxl">3</span>
            </div>
        );
    }
    if (step === 3) {
        return (
            <div className="introStory">
                <span className="xxl">2</span>
            </div>
        );
    }
    return (
        <div className="introStory">
            <span className="xxl">1</span>
        </div>
    );
};
