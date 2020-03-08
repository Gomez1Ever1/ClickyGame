import React from 'react';

function Navbar(props) {
    return (<nav className="navbar" >
        Score: {props.score}
        Top Score: {props.topScore}
    </nav >
    )
}
export default Navbar;