import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll' , border: '2px solid #088D89' , height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;