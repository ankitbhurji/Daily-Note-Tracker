import styles from './ToggleWindow.module.css'
import DailyNoteTracker from '../../images/DailyNoteTracker.svg';
import DailyNotes from '../../images/DailyNotes.svg';
import BookMarks from '../../images/BookMarks.svg';
import React, { useState } from 'react'

function ToggleWindow() {

    const [toggle, setToggle] = useState({
        notesKey:false,
        bookMarksKey:false
    })

    function clickNotes(){
        setToggle({...toggle, notesKey:!toggle.notesKey, bookMarksKey:false})
    }
    function clickBookmarks(){
        setToggle({...toggle, notesKey:false, bookMarksKey:!toggle.bookMarksKey})
    }

    return ( 
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className='row p-2'>
                    <div className='col-2'><img src={DailyNoteTracker}/></div>
                    <div className='col-10'><p>DAILY NOTE TRACKER</p></div>
                    </div>
                </div>
                <button onClick={clickNotes} className={toggle.notesKey?styles.buttonActive:''}>
                    <div className='row p-2'>
                        <div className='col-2'>
                            <div className={styles.dailyNotes}><img src={DailyNotes}/></div>
                        </div>
                        <div className='col-10'>
                            <div className={styles.dailyNotesFont}>Daily Notes</div>
                        </div>
                    </div>
                </button>
                <button onClick={clickBookmarks} className={toggle.bookMarksKey?styles.buttonActive:''}>
                    <div className='row p-2'>
                        <div className='col-2'>
                            <div className={styles.bookMarks}><img src={BookMarks}/></div>
                        </div>
                        <div className='col-10'>
                            <div className={styles.bookMarksFont}>BookMarks</div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
     );
}

export default ToggleWindow;