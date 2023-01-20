import styles from './Window.module.css'
import arrow from '../../../images/Arrow.svg'
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import Bookmarks from '../Bookmarks/Bookmarks';
import { useParams } from "react-router-dom";

function Window() {

    let {ctg} = useParams()

    const [message, setMessage]=useState('');
    const [notes, setNotes] = useState([]);
    const [bookMarks, setbookMarks] = useState([]);
   
   
    function clickMessage(){
        if(ctg=='notes'){
            setNotes(notes=>[...notes, message])
        }else{
            setbookMarks(bookMarks=>[...bookMarks, message])
        }
        setMessage('')
    }
    console.log(notes, bookMarks)
    
    return ( 
        <div>
             <div className={styles.container}>
                <div className='row'>
                    {ctg=='notes'?(<Note/>):ctg=='bookmarks'?(<Bookmarks/>):('')}
                </div>
                <div className={styles.inputContainer}>
                    <div className='row'>
                        <div className='col-10'>
                            <div className={styles.inputs}>
                                <input onChange={(e)=>{setMessage(e.target.value)}} value={message} type='text' placeholder={ctg=='notes'?("Type a Daily Notes"):ctg=='bookmarks'?("Type a Book Mark"):('')} />
                            </div>
                        </div>
                        <div className='col-2 p-2'>
                            <button onClick={clickMessage} className={styles.arrow}>
                                <img src={arrow}/>
                            </button>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
     );
}

export default Window;