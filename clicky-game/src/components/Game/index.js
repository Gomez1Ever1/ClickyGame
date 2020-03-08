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

    handleClick = (id) => {
        if (this.state.clickedAmt === data.length) {
            return <alert>You win!</alert>
        }
        else if (id.checked) {
            return <alert>Already clicked!</alert> ,
                this.state.score = 0,
                this.state.clickedAmt = 0;
        }
        else {
            return this.state.score + 1,
                this.state.clickedAmt + 1,
                this.clickedAmt + 1;
        }
    };

    render() {
        return (
            <>
                <Navbar
                    score={this.state.score} />
                {data.map((image) =>
                    <ClickItem
                        handleClick={this.handleClick}
                        src={image.href}
                        id={image.id}
                        checked={image.checked}
                        key={image.id}
                    />)}
            </>
        )
    }
}
export default Game;
