import React from 'react';


function ClickItem(props) {
    return (
        <div className="col-4"
            data-checked={props.checked}
            onClick={() => props.handleClick}>
            <img
                className="img-fluid"
                key={props.id}
                alt={props.id}
                src={props.href} />
        </div>

    )
}
export default ClickItem;