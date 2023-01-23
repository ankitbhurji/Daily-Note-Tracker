import styles from './Bookmarks.module.css'

function Bookmarks(props) {

    let bookmark = props.bookMarks

    return ( 
        <div>
            <div className={styles.NoteContainer}>
                {
                    bookmark.map((data)=>{
                        if(!data.bookmark==''){
                            return(
                                <div>
                                    <div className={styles.notes}>
                                        <div className='row'>
                                            <div className={styles.note}><a href={data.bookmark} target="_blank">{data.bookmark}</a></div>
                                            <div  className={styles.date}><p>{data.time}</p></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                    {/* <div className={styles.notes}>
                        <div className='row'>
                            <div className={styles.note}><a href=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </a></div>
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

export default Bookmarks;