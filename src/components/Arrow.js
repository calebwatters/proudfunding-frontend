import React from 'react'
const Arrow = ({ direction, clickFunction, glyph }) => (
    <i
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        {glyph}
    </i>
);

export default Arrow