import './index.css';
import _ from 'lodash';
import * as serviceWorker from './serviceWorker';

import { shuffle, sample } from "lodash";
import { BrowserRouter, Route } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AddComicArc from './componentes/AddComicArc';

const comicsData = [
    {
        ArcName: "Crise nas infinitas Terras",
        imageUrl: process.env.PUBLIC_URL + '/images/crisis-infinite-earths.jpg',
        imageInfo: "Flash desaparece do multiverso!"
    },
    {
        ArcName: "Guerra Civil",
        imageUrl: process.env.PUBLIC_URL + '/images/civil_War.jpg',
        imageInfo: "Heróis lutando!"
    },
    {
        ArcName: "Zero Hora",
        imageUrl: process.env.PUBLIC_URL + '/images/zero-hour.jpg',
        imageInfo: "Paralax no controle!"
    },
    {
        ArcName: "Crise de Identidade",
        imageUrl: process.env.PUBLIC_URL + '/images/identity-crisis.jpg',
        imageInfo: "Enterrando alguém amado"
    },
    {
        ArcName: "Invasão Secreta",
        imageUrl:  process.env.PUBLIC_URL + '/images/secret-invasion.jpg',
        imageInfo: "Heróis são seus maiores inimigos!"
    },
    {
        ArcName: "Hulk contra o mundo",
        imageUrl: process.env.PUBLIC_URL + '/images/world-war-hulk.jpg',
        imageInfo: "A queda de Raio Negro!"
    },
    {
        ArcName: "Batman vs Predador",
        imageUrl: process.env.PUBLIC_URL + '/images/batman-vs-predator.jpg',
        imageInfo: "Que o melhor caçador vença!"
    },
]

function getTurnData(comicsData) {

    const allArcNames = comicsData.reduce((previousItem, currentItem) => {
            return previousItem.concat(currentItem.ArcName);  
    }, []);

    const fourRandomNames = shuffle(allArcNames).slice(0, 4);
    const turnAnswer = sample(fourRandomNames);

    return {
        options: fourRandomNames,
        comicInfo: comicsData.find((data) => data.ArcName === turnAnswer)
    }
}

const input = getTurnData(comicsData);
let turnResult = "";

function onAnswerSelected(answer){
    const isCorrect = input.comicInfo.ArcName === answer;
    turnResult = isCorrect ? "correct" : "incorrect";
    render();
}

function AppWrapper(){
    return <App turnData={input} turnResult={turnResult} onAnswerSelected={onAnswerSelected}/>;
}

function AddComicArcWrapper(){
    return <AddComicArc onAddComicArc={(arcInfo) =>{
        


    }} />
}

function render() {
    ReactDOM.render(
    <BrowserRouter>
        <switch>
            <Route exact path="/" component={AppWrapper} />
            <Route path="/add" component={AddComicArcWrapper} />
        </switch>
    </BrowserRouter>, document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
