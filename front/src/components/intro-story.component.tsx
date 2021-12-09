import React, { useEffect, useState } from 'react';
import './intro-story.component.css';

export const IntroStory = ({ firstname }: { firstname: string }) => {
    const [step, setStep] = useState(0);
    useEffect(() => {
        let duration: number;
        if (step === 0 || step === 2) {
            duration = 1000;
        } else if (step === 1) {
            duration = 2000;
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
            <div className="introStory introStory-step1">
                <span className="xl yellow">{firstname}</span>
            </div>
        );
    }
    if (step === 1) {
        return (
            <div className="introStory introStory-step2">
                <div>On t'a préparé ton</div>
                <div className="xl yellow">Recap</div>
                <div>
                    de l'année <span className="yellow">2021</span>
                </div>
            </div>
        );
    }
    if (step === 2) {
        return (
            <div className="introStory introStory-step3">
                <span>Tu es prêt ?</span>
            </div>
        );
    }
    if (step === 3) {
        return (
            <div className="introStory introStory-step4">
                <span className="xxl">3</span>
            </div>
        );
    }
    if (step === 4) {
        return (
            <div className="introStory introStory-step5">
                <span className="xxl">2</span>
            </div>
        );
    }
    return (
        <div className="introStory introStory-step6">
            <span className="xxl">1</span>
        </div>
    );
};
