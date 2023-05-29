import React from "react";

const Button = (props) => {

    let {click, title} = props;

    return (
        <button onClick={click}>{title}</button>

    );
};

export default Button;