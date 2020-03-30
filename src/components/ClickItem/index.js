import React from 'react';


function ClickItem(props) {
    return (
        <div
            className={props.id}
            data-checked={props.checked}
        >
            <img
                key={props.id}
                alt={props.id}
                src={props.src} />
        </div>

    )
}
export default ClickItem;