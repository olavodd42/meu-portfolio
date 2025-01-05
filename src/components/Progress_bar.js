// Filename - Progress_bar.js

import React from 'react';

const Progress_bar = ({ bgcolor, progress, height }) => {
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: '10px 0', // Ajuste a margem conforme necessário
        overflow: 'hidden' // Garante que o conteúdo não transborde
    };

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 10, // Ajuste o padding conforme necessário
        boxSizing: 'border-box' // Garante que o padding seja incluído na largura
    };

    const progresstext = {
        color: 'black',
        fontWeight: 900
    };

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}%`}</span>
            </div>
        </div>
    );
};

export default Progress_bar;
