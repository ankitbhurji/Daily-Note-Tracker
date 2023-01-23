import styles from './Note.module.css'

function Note(props) {

    let notes = props.notes 
    
    return ( 
            <div>
                <div className={styles.NoteContainer}>
                    {
                        notes.map((data, index)=>{
                            if(!data.note==''){
                                return(
                                    <div key={index}>
                                        <div className={styles.notes}>
                                            <div className='row'>
                                                <div className={styles.note}>{data.note}</div>
                                                <div className={styles.date}><p>{data.time}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {/* <div className={styles.notes}>
                        <div className='row'>
                            <div className={styles.note}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p></div>
                            <div  className={styles.date}><p>date</p></div>
                        </div>
                    </div> */}
                    {/* <div className={styles.notes}>
                        <div className='row'>
                            <div className={styles.note}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p></div>
                            <div  className={styles.date}><p>date</p></div>
                        </div>
                    </div>
                    <div className={styles.notes}>
                        <div className='row'>
                            <div className={styles.note}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p></div>
                            <div  className={styles.date}><p>date</p></div>
                        </div>
                    </div>
                    <div className={styles.notes}>
                        <div className='row'>
                            <div className={styles.note}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p></div>
                            <div  className={styles.date}><p>date</p></div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
     );
}

export default Note;