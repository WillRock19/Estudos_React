import _ from 'lodash';
import * as serviceWorker from './serviceWorker';

import { shuffle, sample } from "lodash";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ComicGameApp from './App';
import AddComicArc from './componentes/AddComicArc';

const comicsData = [
    {
        arcName: "Crise nas infinitas Terras",
        imageUrl: process.env.PUBLIC_URL + '/images/crisis-infinite-earths.jpg',
        imageInfo: "Flash desaparece do multiverso!",
        authors: ['']
    },
    {
        arcName: "Guerra Civil",
        imageUrl: process.env.PUBLIC_URL + '/images/civil_War.jpg',
        imageInfo: "Heróis lutando!",
        authors: ['']
    },
    {
        arcName: "Zero Hora",
        imageUrl: process.env.PUBLIC_URL + '/images/zero-hour.jpg',
        imageInfo: "Paralax no controle!",
        authors: ['']
    },
    {
        arcName: "Crise de Identidade",
        imageUrl: process.env.PUBLIC_URL + '/images/identity-crisis.jpg',
        imageInfo: "Enterrando alguém amado",
        authors: ['']
    },
    {
        arcName: "Invasão Secreta",
        imageUrl:  process.env.PUBLIC_URL + '/images/secret-invasion.jpg',
        imageInfo: "Heróis são seus maiores inimigos!",
        authors: ['']
    },
    {
        arcName: "Hulk contra o mundo",
        imageUrl: process.env.PUBLIC_URL + '/images/world-war-hulk.jpg',
        imageInfo: "A queda de Raio Negro!",
        authors: ['']
    },
    {
        arcName: "Batman vs Predador",
        imageUrl: process.env.PUBLIC_URL + '/images/batman-vs-predator.jpg',
        imageInfo: "Que o melhor caçador vença!",
        authors: ['']
    },
]

let turnInfo = createTurnInformation();

function getTurnData(comicData) {

    const allNames = comicData.reduce((previousItem, currentItem) => {
            return previousItem.concat(currentItem.arcName);  
    }, []);

    const fourRandomNames = shuffle(allNames).slice(0, 4);
    const turnAnswer = sample(fourRandomNames);

    return {
        options: fourRandomNames,
        comicInfo: comicData.find((data) => data.arcName === turnAnswer)
    }
}

function createTurnInformation(){
    return {
        turnData: getTurnData(comicsData),
        turnResult: ""
    }
}

function onAnswerSelected(answer){
    const isCorrect = turnInfo.turnData.comicInfo.arcName === answer;
    turnInfo.turnResult = isCorrect ? "correct" : "incorrect";
    render();
}

function onContinueClick(){
    turnInfo = createTurnInformation();
    render();
}

function GameWrapper(){
    return <ComicGameApp {...turnInfo} onAnswerSelected={onAnswerSelected} onContinueClick={onContinueClick}/>;
}

const AddFormWrapper = withRouter(({history}) => 
    <AddComicArc onAddComicArc={(arcInfo) => { 
            comicsData.push(arcInfo);
            history.push('/'); 
        }} 
    />);

function render() {
    ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={GameWrapper} />
            <Route path="/add" component={AddFormWrapper} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
