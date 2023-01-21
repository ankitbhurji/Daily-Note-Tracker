import styles from './Bookmarks.module.css'

function Bookmarks(props) {

    let bookmark = props.bookMarks

    return ( 
        <div>
            <div className={styles.noteContainer}>
             {
                bookmark.map((data, index)=>{
                    if(!data.bookmark==''){
                        return(
                            <div key={index}>
                                <div className='row m-3'>
                                    <div className={styles.note}>
                                        <a href={data.bookmark}>{data.bookmark}</a>
                                        <p className={styles.date}>{data.time}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }  
                })
             }
        </div>
        </div>
     );
}

export default Bookmarks;