import React, { useEffect, useState } from 'react'
import TableData from '../components/TableData'
import '../styles/Home.css'
import DeleteIcon from '../assets/delete.svg'
import firebase from '../utils/firebase'

function HomePage() {

    const [data, setData] = useState({
        name:'',
        number:0,
        date: new Date(),
        start:'',
        end:''
    })

    const [view, setView] = useState(TableData);
    const [olddata, setOldData] = useState();

    useEffect(() => {
        const dataRef = firebase.database().ref('MeetData');
        dataRef.on('value', (res) => {
            const response = res.val();
            const dataList = [];
            for(let id in response){
                dataList.push({id, ...response[id]});
            }
            setView(dataList);  
            setOldData(dataList);      
        })
    }, [])

    const addData = () => {
        const dataRef = firebase.database().ref('MeetData');
        const newData = {
            ...data
        }

        dataRef.push(newData)
    }

    const handleDelete = key => {
        if(window.confirm('Are you sure to delete this record?')){
            const dataRef = firebase.database().ref('MeetData').child(key);
            dataRef.remove();
        }
    }

    const handleSearch = (event) => {
        let date = new Date(event.target.value).getTime();
        if(event.target.value !== ''){
        const newData = view.filter((val) => {
            const start = new Date(val.date).getTime()
            console.log(date,start)
            if(val.name.toLocaleLowerCase().includes(event.target.value) || date <= start){
                return val;
            }
        })
        setView(newData);
    }
     else{
         setView(olddata);
     }
    }


    return (
        <div>
            <h2 className='home-title'>My Meetings</h2>
            <div className='header'>
                <input onChange={handleSearch} className='searchBox' placeholder='Search'></input>
                <label className='from'>From:</label>
                <input onChange={handleSearch} className='dateFrom' type='date'></input>
                <label className='from'>To:</label>
                <input className='dateFrom' type='date'></input>
            </div>
            <div className='mainTable'>
                <div className='tableContainer'>
                <table>
                    <thead>
                    <tr>
                        <th>Sl. no</th>
                        <th>Meeting Name</th>
                        <th>No Of People Attending</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {view.map((value, index) => {
                        return(
                        <tr key={value.id}>
                            <td align='center'>{index + 1}</td>
                            <td align='center'>{value.name}</td>
                            <td align='center'>{value.number}</td>
                            <td align='center'>{value.date}</td>
                            <td align='center'>{value.start}</td>
                            <td align='center'>{value.end}</td>
                            <td align='center'><img onClick={() => { handleDelete(value.id) }} className='deleteIcon' src={DeleteIcon} alt='delete'/></td>
                        </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <div className='footer'>
                <input onChange={(event) => setData({...data, name: event.target.value})} className='meetName'></input>
                <input onChange={(event) => setData({...data, number: event.target.value})} type='number' className='meetNumber'></input>
                <input onChange={(event) => setData({...data, date: event.target.value})} className='meetDate' type='date'></input>
                <input onChange={(event) => setData({...data, start: event.target.value})} className='meetStart' type='time'></input>
                <input onChange={(event) => setData({...data, end: event.target.value})} className='meetEnd' type='time'></input>
                <button onClick={addData} className='addBtn' type='submit'>Add</button>
            </div>
        </div>
    )
}

export default HomePage
