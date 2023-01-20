import styles from './Bookmarks.module.css'

function Bookmarks() {
    return ( 
        <div>
            <div className={styles.noteContainer}>
             <div className='row m-3'>
                <div className={styles.note}>
                    <a href="https://www.w3schools.com" target="_blank">https://www.w3schools.com</a>
                    <p className={styles.date}>data</p>
                </div>
             </div>
             <div className='row m-3'>
                <div className={styles.note}>
                    <a href="">Lorem Ipsum is simply dummy text of the printing and</a>
                    <p className={styles.date}>data</p>
                </div>
             </div>
             <div className='row m-3'>
                <div className={styles.note}>
                    <a href="">Lorem Ipsum is simply dummy text of the printing and</a>
                    <p className={styles.date}>data</p>
                </div>
             </div>
        </div>
        </div>
     );
}

export default Bookmarks;