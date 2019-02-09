import React from 'react';

function showContinueButton(turnResult){
    return turnResult == 'correct';
}

export default ({turnResult, onContinueClick}) => {
    return <span>{
            showContinueButton(turnResult) ? 
                <button className="continue-button" onClick={onContinueClick}>Continue</button> 
            : null
        }
    </span>;
};