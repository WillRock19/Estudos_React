import React from 'react';
import './index.css';

function AddComicArc({ onAddComicArc }) {
    
    return <section className="AddArcForm">
            <h1>Add a Comic arc now!</h1>
            <AddComicArcForm onAddComicArc={onAddComicArc} /> 
        </section>
}

class AddComicArcForm extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            ImageUrl: '',
            ImageInfo: '',
            AuthorsTemp: '',
            Authors: []
        }
        this.bindContextToFunctions();
    }

    addAuthorToList(event){
        event.preventDefault();

        if(this.authorsTempHasValue()){
            this.setState({
                Authors: this.state.Authors.concat([this.state.AuthorsTemp]),
                AuthorsTemp: ''
            });
        }
    }

    authorsTempHasValue(){
        return this.state.AuthorsTemp !== null && (this.state.AuthorsTemp.match(/^ *$/) === null);
    }

    bindContextToFunctions(){
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.addAuthorToList = this.addAuthorToList.bind(this);
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onAddComicArc({
            arcName: this.state.Name,
            imageUrl: this.state.ImageUrl,
            imageInfo: this.state.ImageInfo,
            authors: this.state.Authors
        });
    }

    render() {
        return <form onSubmit={this.onFormSubmit}>
            <div>
                <label htmlFor="Name">Arc's Name: </label>
                <input name="Name" value={this.state.Name} onChange={this.onFieldChange}></input>
            </div>
            <div>
                <label htmlFor="ImageUrl">Image's Url: </label>
                <input name="ImageUrl" value={this.state.ImageUrl} onChange={this.onFieldChange}></input>
            </div>
            <div>
                <label htmlFor="ImageInfo">Image`s Info: </label>
                <input name="ImageInfo" value={this.state.ImageInfo} onChange={this.onFieldChange}></input>
            </div>
            <div className="AuthorsInfo">
                <label htmlFor="AuthorsTemp">Authors: </label>
                <ul>
                    {this.state.Authors.map((author) => <li key={author}>{author};</li>)}
                </ul>
                <input name="AuthorsTemp" value={this.state.AuthorsTemp} onChange={this.onFieldChange}></input>
                <button onClick={this.addAuthorToList}>+</button>
            </div>
            <button name="addArcButton">Add Now!</button>
        </form>
    }
}

export default AddComicArc;