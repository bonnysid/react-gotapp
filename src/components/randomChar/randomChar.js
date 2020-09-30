import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotaServices';
import Spinner from '../spinner';
import ErrorMessage from '../errorMesssage';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateCharacter();
    }
    
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    onError = (e) => {
        this.setState({
            error: true, 
            loading: false
        });
    }

    updateCharacter() {
        const id = Math.floor(Math.random() * 140 + 25); // 25 - 140
        GotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
        
    }

    render() {
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
