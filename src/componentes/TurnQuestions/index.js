import React from 'react';
import PropTypes from 'prop-types';

const TurnQuestions = ({data}) => {
    return <section className="game-questions">
                {data.map((info) => {
                    return  <div>
                                <div className="turn-image">
                                    <img src={info.imageUrl} alt={data.imageInfo}></img>
                                </div>
                                <div className="turn-options">
                                    <ul>
                                        { info.options.map((option) => <li> { option } </li>) }
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