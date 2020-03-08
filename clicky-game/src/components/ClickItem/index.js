import React from 'react';


function ClickItem(props) {
    return (
        <div
            className={props.id}
            data-checked={props.checked}
            onClick={() => props.handleClick(props.id)}
        >
            <img
                key={props.id}
                src={props.src}></img>
        </div>

    )
}
export default ClickItem;