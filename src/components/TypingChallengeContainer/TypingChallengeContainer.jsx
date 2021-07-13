import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) => {
    // console.log('Inside Typing Challenge Container ', selectedParagraph);
    return (
        <div className="typing-challenge-container">
            {/* Details Sections */}
            <div className="details-container">
                {/* Words */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                {/* Chars */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            {/* The Real Challenge */}
            <div className="typewriter-container">
                <TypingChallenge 
                    selectedParagraph={selectedParagraph} 
                    timerStarted = {timerStarted}
                    timeRemaining = {timeRemaining}
                    testInfo = {testInfo}
                    onInputChange = {onInputChange}
                />
            </div>
        </div>
    )
}

export default TypingChallengeContainer;