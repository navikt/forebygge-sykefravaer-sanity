import React from 'react';

const spanStyle = {
    backgroundColor: '#CCE1F3',
    width: 40, height: 40, borderRadius: '50px', display: 'flex', justifyContent: 'center',
    alignItems: 'center'
};

const imgStyle = { width: 30, height: 30 };

const Thumbnail = (props) => {
    return (
    <span style={spanStyle}><img src={props.src} style={imgStyle} /></span>
    )
};

export default Thumbnail;
