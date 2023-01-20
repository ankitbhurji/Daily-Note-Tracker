import styles from './Note.module.css'

function Note(props) {
    
    let notes = props.notes

    return ( 
        <div className={styles.noteContainer}>
             <div className='row m-3'>
                {
                    notes.map((data)=>{
                        if(!data.note==''){
                            return(
                                <div>
                                   <div className={styles.note}>
                                       <p>{data.note}</p>
                                       <p className={styles.date}>{data.time}</p>
                                   </div>
                                </div>
                                )
                        }
                    })
                }
                
                {/* <div className={styles.note}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
                    <p className={styles.date}>data</p>
                </div> */}
             </div>
        </div>
     );
}

export default Note;