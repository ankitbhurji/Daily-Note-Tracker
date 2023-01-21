import styles from './Window.module.css'
import arrow from '../../../images/Arrow.svg'
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import Bookmarks from '../Bookmarks/Bookmarks';
import { json, useParams } from "react-router-dom";

function Window() {

    let {ctg} = useParams()
    var date = new Date()
    var dateTime = date.toLocaleString("en-NZ")

    const [message, setMessage]=useState('');  

    const [notes, setNotes] = useState([
        {note:'', time:''}
    ]);
    const [LocalNotes, SetLocalNotes] = useState([])

    const [bookMarks, setbookMarks] = useState([
        {bookmark:'', time:''}
    ]);

    console.log(LocalNotes)
    function InputChange(e){
        setMessage(e.target.value)
    }

    const  LocalData = () =>{
        console.log(notes)
        localStorage.setItem("localNotesData", JSON.stringify(notes))
        SetLocalNotes(JSON.parse(localStorage.getItem("localNotesData")))
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
        setMessage('')
    }

    function KeyPress(e){
        if(e.key==="Enter"){
            clickMessage()
        }
    }

    useEffect(()=>{
        LocalData()
    }, [notes])
 
    
    return ( 
        <div>
             <div className={styles.container}>
                <div className='row'>
                    {ctg=='notes'?(<Note notes={LocalNotes}/>):ctg=='bookmarks'?(<Bookmarks bookMarks={bookMarks}/>):('')}
                </div>
                <div className={styles.inputContainer}>
                    <div className='row'>
                        <div className='col-10'>
                            <div className={styles.inputs}>
                                <input onChange={InputChange} onKeyPress={KeyPress} value={message} type='text' placeholder={ctg=='notes'?("Type a Daily Notes"):ctg=='bookmarks'?("Type a Book Mark"):('')} required/>
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