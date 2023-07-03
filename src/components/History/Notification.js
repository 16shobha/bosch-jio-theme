import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import '../History/Notification.css'
import axios from 'axios';

const Notification = () => {
    const[fleets,setfleets]= useState([]);
    const[notification,setnotification] = useState([]);
    const [selectedfleet,setselectedfleet] = useState('');
    const [emptymsg, setemptymsg] = useState('Select a fleet to view data...');
    useEffect(() => {
         axios.get('http://localhost:8080/api/fleets').then((res)=>{
         const fleetlist = res.data;
         setfleets(fleetlist);
         console.log(res.data);
        })
    }, []);

    const displaydata=(selectedfleet)=>{
        axios.get(`http://localhost:8080/api/fleets/${selectedfleet}/vehicles?query=${selectedfleet}`).then((res)=>{
            const notilist = res.data;
            setnotification(notilist);
            console.log(res.data);
            if(notification.length===0){
                setemptymsg('No record present...')
            }
           })
       }
    return (
        <div style={{overflowX:"hidden"}}>
            <div className='my-3 mx-3'>
                <form >
                    <div className='d-flex flex-row'>
                        <div>
                            <label className='labeltext' for="fleet">Select Fleet :</label>
                        </div>

                        <div className='mx-2 my-1'>
                            <select id="fleet" name="fleets"  onChange={(e)=> setselectedfleet(e.target.value)}>
                                <option value="">Select Fleet</option>
                                {fleets.map((option) => {
          return (
            <option key={option.fleetId} value={option.fleetId}>
              {option.fleetId}
            </option>
          );
        })}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-sm btn-success my-3' onClick={()=>displaydata(selectedfleet)} >Submit</button>
                </form>
            </div>
            {(selectedfleet==='' || notification.length===0)  ?<div className='emptymsgstyle d-flex align-items-center justify-content-center'>{emptymsg}</div>:
            <div className='datadisplay'>
            <div>
               
                <div class="row no-gutters justify-content-center">
                    <div class="col-sm-2 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <span><i class="fa-solid fa-bolt"></i></span>
                                <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Cell Volatge Deviation</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">   
                                <span><i class="fa-solid fa-temperature-three-quarters"></i></span>
                                <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Cell Temperature Deviation</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                            <span><i class="fa-solid fa-triangle-exclamation"></i></span>
                            <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Acc Aging AE</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                            <span><i class="fa-solid fa-temperature-high"></i></span>
                            <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Overtemp AE</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <span><i class="fa-solid fa-battery-half"></i></span>
                                <span className='spantext'>12</span>
                                <h5 className="my-3 titletext">Over/Under Charging</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <h3 className='heading'>Notification History</h3>
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>
                            Notification Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Notification Level
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Number
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Date and Time
                        </th>
                    </thead>
                    <tbody style={{ textAlign: "center", justifyContent: "center" }}>
                    {notification.length >0 && notification.map((item, index) => {
                            return <tr key={index}>
                            <td>{item.notificationType}</td>
                            <td>{item.notificationLevel}</td>
                            <td>{item.vehicleNo}</td>
                            <td>{item.vehicleType}</td>
                            <td>{item.date}</td>
                        </tr>

                        })}
                    </tbody>
                </table>
            </div>
        </div>}
        </div>
    )
}

export default Notification