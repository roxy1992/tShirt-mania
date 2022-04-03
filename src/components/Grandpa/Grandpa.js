import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncele';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>grandpa</h4>

                <p>House:{house} <button onClick={handleBuyAHouse}>Buy a house</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;