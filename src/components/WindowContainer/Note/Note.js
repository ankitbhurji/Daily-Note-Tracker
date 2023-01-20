import styles from './Note.module.css'

function Note() {
    return ( 
        <div className={styles.noteContainer}>
             <div className='row m-3'>
                <div className={styles.note}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
                    <p className={styles.date}>data</p>
                </div>
                <div className={styles.note}>
                    <p>recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className={styles.date}>data</p>
                </div>
                <div className={styles.note}>
                    <p>recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className={styles.date}>data</p>
                </div>
             </div>
        </div>
     );
}

export default Note;