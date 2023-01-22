import styles from './Window.module.css'
import arrow from '../../../images/Arrow.svg'
import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import Bookmarks from '../Bookmarks/Bookmarks';
import {json, useParams } from "react-router-dom";

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

    // const [notes, setNotes] = useState(getNotes())
    // const [bookMarks, setbookMarks] = useState({})



//trial mode......................
//     function InputChange(e){
//         setMessage(e.target.value)
//     }
    
    
//     function KeyPress(e){
//         if(e.key==="Enter"){
//             clickMessage();
//             setMessage('');
//         }
//     }

//     function clickMessage(){
//         setNotes(notes=>[...notes, {note:message, time:dateTime}])
//         // localStorage.setItem("LocalNotes", JSON.stringify(notes));
//         // let getNotes = JSON.parse(localStorage.getItem("LocalNotes"));
//         // console.log(getNotes)
//     }
    
// useEffect(()=>{
//     localStorage.setItem("LocalNotes", JSON.stringify(notes));
// }, [notes]);
    

    






// not allowed...........

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

    
    
    return ( 
        <div>
             <div className={styles.container}>
                <div className='row'>
                    {ctg=='notes'?(<Note notes={notes} />):ctg=='bookmarks'?(<Bookmarks bookMarks={bookMarks}/>):('')}
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