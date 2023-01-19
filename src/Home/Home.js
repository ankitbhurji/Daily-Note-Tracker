import ToggleWindow from '../components/ToggleWindow/ToggleWindow';
import styles from './Home.module.css'

function Home() {
    return ( 
        <div>
            <div className={styles.home}>
                <div className='row'>
                    <div className='col-3'><ToggleWindow /> </div>
                    <div className='col-7'>col 8</div>
                </div>
            </div>
        </div>
     );
}

export default Home;