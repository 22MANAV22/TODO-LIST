import React, { useState } from 'react';
import './App.css'
function Todolist() {
    const[activity , setactivity] = useState("") ;
    const [listdata , setlistdata] = useState([]);
    function addactivty(){
        setlistdata((listdata) =>{
            const updatedlist = [...listdata, activity];
            console.log(updatedlist);
            setactivity('');
            return updatedlist;
        })
       
    }

    function removeActivity(i){
        const updatedlistdata = listdata.filter((elements,id) =>{
            return i!=id;
        })
        setlistdata(updatedlistdata);

    }
    function removeall(){
        setlistdata([])
    }
    return (
        <>
        <div className='container'>
            <div className='header'>TODOLIST</div>
            <input type='text' placeholder='Add activity' value={activity} onChange={(e) => setactivity(e.target.value)}/>
            <button onClick={addactivty}> Add </button>
            <p className='list-heading'>Here's your list : {')'}</p>
            {listdata != [] && listdata.map((data, i) => {
                return(
                    <>
                    <p key={i}>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'>
                        <button onClick={()=>removeActivity(i)}>remove(-)</button>
                        </div>
                    </p>
                    </>
                )
            })}
            {listdata.length >=1 && 
            <button onClick={()=>removeall()}>Remove All</button>}
        </div>
        </>    
);
}

export default Todolist;