import React from 'react';

function Navbar(props) {
    return (<nav className="navbar">
        <h1>Score: {props.score}</h1>

        <h1>Top Score: {props.topScore}</h1>
    </nav >
    )
}
export default Navbar;