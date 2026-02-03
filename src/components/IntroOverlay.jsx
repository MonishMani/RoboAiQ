import React, { useEffect, useState } from 'react';

/**
 * IntroOverlay Component
 * Displays the luxury intro screen as an iframe.
 * Listens for 'introComplete' message from the intro page.
 */
const IntroOverlay = ({ onComplete }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data && event.data.type === 'introComplete') {
                handleIntroComplete();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const handleIntroComplete = () => {
        setIsFading(true);
        sessionStorage.setItem('hasSeenIntro', 'true');

        // Remove from DOM after fade animation
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 1000); // Match transition duration
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                opacity: isFading ? 0 : 1,
                transition: 'opacity 1s ease-in-out',
                pointerEvents: isFading ? 'none' : 'auto',
                backgroundColor: '#eef1f5' // Match intro background
            }}
        >
            <iframe
                src="/intro.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block'
                }}
                title="RoboAiQ Intro"
            />
        </div>
    );
};

export default IntroOverlay;
