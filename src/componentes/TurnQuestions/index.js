import React from 'react';
import PropTypes from 'prop-types';

const TurnQuestions = ({turnData, turnResult, onAnswerSelected}) => {

    console.log("Dados do turno recebidos pelo TurnQuestions: ");
    console.log(turnData);

    function defineTurnResultClass(){
        if(turnResult == undefined)
            return "";

        return turnResult;            
    }

    return <section className={"game-questions " + defineTurnResultClass()}>
                <div className="turn-data">
                    <div className="turn-image">
                        <img src={turnData.comicInfo.imageUrl} alt={turnData.comicInfo.imageInfo}></img>
                    </div>
                    <div className="turn-options">
                        <ul>
                            { 
                                turnData.options.sort()
                                    .map((option, index) => 
                                        <li key={index.toString()} onClick={() => { onAnswerSelected(option); } }> { option } </li>) 
                            }
                        </ul>
                    </div>
                </div>
           </section>;
}

TurnQuestions.propTypes = {
    onAnswerSelected: PropTypes.func.isRequired,
    turnData: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      comicInfo: PropTypes.objectOf(PropTypes.string).isRequired
    })
    .isRequired,
    turnResult: PropTypes.string
}

export default TurnQuestions;