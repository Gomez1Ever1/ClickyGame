import React from 'react';

function Navbar(props) {
    return (<nav className="navbar">
        Score: {props.score}
        TopScore: {props.topScore}
    </nav >
    )
}
export default Navbar;