import React from 'react';

function showContinueButton(turnResult){
    return turnResult == 'correct';
}

export default ({turnResult, onContinueClick}) => {
    return <div>{
            showContinueButton(turnResult) ? 
                <button className="continue-button" onClick={onContinueClick}>Continue...</button> 
            : null
        }
    </div>;
};