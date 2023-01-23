import styles from './Window.module.css'
import arrow from '../../../images/Arrow.svg'
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import Bookmarks from '../Bookmarks/Bookmarks';
import { useParams } from "react-router-dom";
import Select from '../Select/Select';

const  getNotes = () => {

    let getLocalNotes = JSON.parse(localStorage.getItem("LocalNotes")) || null;
    if(getLocalNotes){
    return JSON.parse(localStorage.getItem("LocalNotes"));
    }else{
        return []
    }
}

const getBookMarks = () => {
    let getLocalBookmarks = JSON.parse(localStorage.getItem("LocalBookMarks")) || null;
    if(getLocalBookmarks){
        return JSON.parse(localStorage.getItem("LocalBookMarks"));
        }else{
            return []
        }
}

function Window() {

    let {ctg} = useParams()
    var date = new Date()
    var dateTime = date.toLocaleString("en-NZ")
    const [message, setMessage]=useState('');

    const [notes, setNotes] = useState(getNotes());
    const [bookMarks, setbookMarks] = useState(getBookMarks());

    function InputChange(e){
        setMessage(e.target.value)
    }

    function clickMessage(){
        if(ctg=='notes'){
            if(!message==''){
                setNotes(notes=>[...notes, {note:message, time:dateTime}])
            }
        }else{
            if(!message==''){
                setbookMarks(bookMarks=>[...bookMarks, {bookmark:message, time:dateTime}])
            }
        }
        setMessage('');
    }

    function KeyPress(e){
        if(e.key==="Enter"){
            clickMessage();
        }
    }

    useEffect(()=>{
        localStorage.setItem("LocalNotes", JSON.stringify(notes));
        localStorage.setItem("LocalBookMarks", JSON.stringify(bookMarks));
    }, [notes, bookMarks])

    return(
        <div>
            <div className={styles.winodowContainer}>
                <div className='row'>
                    {ctg=='notes'?(<Note notes={notes} />):ctg=='bookmarks'?(<Bookmarks bookMarks={bookMarks}/>):(<Select/>)}
                </div>
                
                <div className={styles.input}>
                    <div className='row'>
                        <div className='col-10'>
                            <input onChange={InputChange} onKeyPress={KeyPress} value={message} placeholder={ctg=='notes'?("Type a Daily Notes..."):ctg=='bookmarks'?("Type a Book Mark..."):('')}/>
                        </div>
                        <button onClick={clickMessage} className='col-2'>
                            <div className={styles.icon}><img src={arrow}/></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window;