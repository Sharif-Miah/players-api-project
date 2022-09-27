import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Main.css'

const Main = () => {
    const [search, setSearch] = useState('')
    const [player, setPlayer] = useState([])
    // console.log(search);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
        https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p`)
            .then(res => res.json())
            .then(data => setPlayer(data?.player))
    }, [])

    console.log(player);

    return (
        <div className='main-container'>
            <div className='left-site'>
                <input onChange={(e) => setSearch(e.target.value)} className='search' type="text" />
                <button className='search-btn'>Search</button>
            </div>
            <div className='right-site'>
                <h1>right site</h1>
            </div>
        </div>
    );
};

export default Main;