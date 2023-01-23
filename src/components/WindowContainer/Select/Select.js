import styles from './Select.module.css'

function Select() {
    return ( 
        <div>
            <div className={styles.NoteContainer}>
                <div className={styles.notes}>
                    <div className='row'>
                        <div className={styles.note}><p>Select</p></div>
                        <div className={styles.date}><p></p></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Select;