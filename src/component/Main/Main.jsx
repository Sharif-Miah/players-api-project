import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Main.css'

const Main = () => {
    const [search, setSearch] = useState('')
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
        https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))
    }, [search])



    return (
        <div className='main-container'>
            <div className='left-site'>
                <input onChange={(e) => setSearch(e.target.value)} className='search' type="text" />
                <button className='search-btn'>Search</button>
                <div className='players-container'>
                    {
                        players.map(player => <Player key={player.idPlayer} player={player} cart={cart} setCart={setCart} />)
                    }
                </div>
            </div>
            <div className='right-site'>
                <h3 className='item-length'>Added cart:</h3>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Main;