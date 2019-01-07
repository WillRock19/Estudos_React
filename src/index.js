import './index.css';
import _ from 'lodash';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from "lodash";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// function ButtonGenerator({numberOfButtons, onSelection}){

//     const makeButton = function(buttonNumber){
//         return <button key={buttonNumber} id={buttonNumber} onClick={event => onSelection(event.target.id)}>{buttonNumber}</button>;
//     }

//     return <div>
//         {_.range(1, numberOfButtons + 1).map(makeButton)}
//     </div>;
// }

// function ConsolePrinter(number){

//     console.log("Tá maluco, vacilão?");
//     console.log(`Fica clicando no botão ${number} ¬¬`);

// }

// ReactDOM.render(<ButtonGenerator numberOfButtons={99} onSelection={ConsolePrinter} />, document.getElementById('root'));


// function Sum(props){
//     return <h1>{props.valor1} + {props.valor2} = {props.valor1 + props.valor2}</h1>;
// }

// function ShowMessage(props){
//     return (<div>{ props.isVisible ? props.children : null }</div>);
// }

// ShowMessage.propTypes = {
//     isVisible: PropTypes.bool.isRequired
// }

// const state = {
//     showSum: true
// }

// setInterval(() => {
//     state.showSum = !state.showSum
//     render();    
// }, 1000);

// function render() {
//     ReactDOM.render(<ShowMessage isVisible = {state.showSum} >
//                         <div>Olha o letreiro!
//                             <Sum valor1={99} valor2={19}></Sum>
//                         </div>
//                     </ShowMessage>, document.getElementById('root'));
// }

const crossoverData = [
    {
        crossoverName: "Crise nas infinitas Terras",
        imageUrl: process.env.PUBLIC_URL + '/images/crisis-infinite-earths.jpg',
        imageInfo: "Flash desaparece do multiverso!"
    },
    {
        crossoverName: "Guerra Civil",
        imageUrl: process.env.PUBLIC_URL + '/images/civil_War.jpg',
        imageInfo: "Heróis lutando!"
    },
    {
        crossoverName: "Zero Hora",
        imageUrl: process.env.PUBLIC_URL + '/images/zero-hour.jpg',
        imageInfo: "Paralax no controle!"
    },
    {
        crossoverName: "Crise de Identidade",
        imageUrl: process.env.PUBLIC_URL + '/images/identity-crisis.jpg',
        imageInfo: "Enterrando alguém amado"
    },
    {
        crossoverName: "Invasão Secreta",
        imageUrl:  process.env.PUBLIC_URL + '/images/secret-invasion.jpg',
        imageInfo: "Heróis são seus maiores inimigos!"
    },
    {
        crossoverName: "Hulk contra o mundo",
        imageUrl: process.env.PUBLIC_URL + '/images/world-war-hulk.jpg',
        imageInfo: "A queda de Raio Negro!"
    },
    {
        crossoverName: "Batman vs Predador",
        imageUrl: process.env.PUBLIC_URL + '/images/batman-vs-predator.jpg',
        imageInfo: "Que o melhor caçador vença!"
    },
]

function getTurnData(crossoverData){

    const allCrossoverNames = crossoverData.reduce((previousItem, currentItem) => {
            return previousItem.concat(currentItem.crossoverName);  
    }, []);

    const fourRandomNames = shuffle(allCrossoverNames).slice(0, 4);
    const turnAnswer = sample(fourRandomNames);

    return {
        options: fourRandomNames,
        crossoverInfo: crossoverData.find((data) => data.crossoverName === turnAnswer)
    }
}

const input = getTurnData(crossoverData);

ReactDOM.render(<App turnData={input} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
