import styles from './ToggleWindow.module.css'
import DailyNoteTracker from '../../images/DailyNoteTracker.svg';
import DailyNotes from '../../images/DailyNotes.svg';
import BookMarks from '../../images/BookMarks.svg';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function ToggleWindow() {
    let navigate = useNavigate();
    const [toggle, setToggle] = useState({
        isNotes:false,
        isBookMarks:false
    })

    const NotesClick  = () => {
        setToggle({...toggle, isNotes:true, isBookMarks:false})
        navigate('/notes')
    }
    const BookMarksClick = () => {
        setToggle({...toggle, isBookMarks:true, isNotes:false})
        navigate('/bookmarks')
    }


    return ( 
        <div>
            <div className={styles.DailyNoteTracker}>
                <div className='row'>
                    <div className='d-flex'>
                        <div className={styles.DailyTrackerImage}><img src={DailyNoteTracker} /></div>
                        <div><p>DAILY NOTES TRACKER</p></div>
                    </div>
                </div>
            </div>
            <button onClick={NotesClick} className={toggle.isNotes?(`${styles.DailyNotes} ${styles.buttonActive}`):(`${styles.DailyNotes}`)}>
                <div className='row'>
                    <div className='d-flex m-3'>
                        <div className={styles.DailyNotesImage}><img src={DailyNotes} /></div>
                        <div><p>Daily Notes</p></div>
                    </div>
                </div>
            </button>
            <button onClick={BookMarksClick} className={toggle.isBookMarks?(`${styles.BookMarks} ${styles.buttonActive}`):(`${styles.BookMarks}`)}>
                <div className='row'>
                    <div className='d-flex m-3'>
                        <div className={styles.BookMarksImage}><img src={BookMarks} /></div>
                        <div><p>Bookmarks</p></div>
                    </div>
                </div>
            </button>
        </div>
     );
}

export default ToggleWindow;