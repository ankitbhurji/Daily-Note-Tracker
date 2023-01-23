import ToggleWindow from '../components/ToggleWindow/ToggleWindow';
import styles from './Home.module.css'
import Window from '../components/WindowContainer/Window/Window';
import React from 'react';

function Home() {

    return ( 
        <div>
                <div className={styles.HomeContainer}>
                    <div className='d-flex'>
                        <div className={styles.toggle}><ToggleWindow /> </div>
                        <div className={styles.window}> <Window /> </div>
                    </div>
                </div>
                
        </div>
     );
}

export default Home;