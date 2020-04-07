import React, { Component } from 'react';
import data from '../../data.json';
import ClickItem from '../ClickItem';
import Navbar from '../Navbar';

class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        clickedAmt: 0
    };
    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            score: this.state.score + 1
        })
        console.log("clicked")
    };
    shuffleArray = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    render() {
        const shuffledArray = this.shuffleArray(data);
        return (
            <div className="container">
                <Navbar
                    score={this.state.score}
                    topScore={this.state.topScore} />
                <div className="row">{shuffledArray.map((image) =>
                    <ClickItem
                        href={image.href}
                        id={image.id}
                        onClick={() => this.handleClick}
                        checked={image.checked}
                        key={image.id}
                    />)}
                </div>
            </div>
        )
    }
}
export default Game;
