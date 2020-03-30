import React, { Component } from 'react';
import data from '../../data.json';
import ClickItem from '../ClickItem';
import Navbar from '../Navbar';
import useScoreContext from '../../utils/Provider';

class Game extends Component {
    render() {
        const [state, dispatch] = useScoreContext;
        const game = {
            score: 0,
            topScore: 0,
            clickedAmt: 0
        }
        function handleClick(e) {
            e.preventDefault();
            dispatch({
                type: "Score-Check",
                isChecked: this.checked
            })
)
        }
        return (
            <>
                <Navbar score={this.game.score} />
                {data.map((image) =>
                    <ClickItem
                        src={image.href}
                        id={image.id}
                        onClick={handleClick}
                        checked={image.checked}
                        key={image.id}
                    />)}
            </>
        
    }
}
export default Game;
