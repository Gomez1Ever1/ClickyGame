import React from 'react';

function Navbar(props) {
    return (<nav className="navbar">
        Score: {props.state.score}
        TopScore: {props.state.topScore}
    </nav >
    )
}
export default Navbar;