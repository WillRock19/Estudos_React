import React from 'react';
import PropTypes from 'prop-types';

const TurnQuestions = ({data}) => {
    return <section className="game-questions">
                {data.map((info) => {
                    return  <div className="turn-data">
                                <div className="turn-image">
                                    <img src={info.imageUrl} alt={data.imageInfo}></img>
                                </div>
                                <div className="turn-options">
                                    <ul>
                                        { info.options.map((option, index) => <li key={index.toString()}> { option } </li>) }
                                    </ul>
                                </div>
                            </div>
                        }
                    )}
           </section>;
}

// TurnQuestions.propTypes = {

//     data: PropTypes.

// }

export default TurnQuestions;