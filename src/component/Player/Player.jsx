import React from 'react';
import './Player.css'

const Player = ({ player, cart, setCart }) => {
    // console.log(player);
    const { strPlayer, strThumb, strNationality, strTeam } = player;

    const showData = () => {
        const info = {
            strPlayer,
            strNationality,
            strTeam,
            price: 1500
        }

        if (cart?.length) {
            setCart([...cart, info])
        } else {
            setCart([info])
        }
    }


    return (
        <div className='player'>
            <img className='img' src={strThumb} alt="" />
            <h4>{strPlayer}</h4>
            <button className='data-btn'>Show data</button>
            <button onClick={showData} className='data-btn'>Add data</button>
            <button className='data-btn'>others</button>
        </div>
    );
};

export default Player;