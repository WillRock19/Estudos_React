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

// // ReactDOM.render(<ButtonGenerator numberOfButtons={99} onSelection={ConsolePrinter} />, document.getElementById('root'));


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