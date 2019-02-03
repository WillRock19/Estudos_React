import React from 'react';
import './index.css';

function AddComicArc() {
    
    return <section className="AddArcForm">
            <h1>Add a Comic arc now!</h1>
            <AddComicArcForm /> 
        </section>
}

class AddComicArcForm extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        return <form>
            <div>
                <label forHtml="Name">Arc's Name: </label>
                <input name="Name"></input>
            </div>
            <div>
                <label forHtml="ImageUrl">Image's Url: </label>
                <input name="ImageUrl"></input>
            </div>
            <div>
                <label forHtml="ImageInfo">Image`s Info: </label>
                <input name="ImageInfo"></input>
            </div>
            <div>
                <label forHtml="Authors">Authors: </label>
                <input name="Authors"></input>
            </div>
        </form>
    }
}

export default AddComicArc;