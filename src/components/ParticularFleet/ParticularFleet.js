import React,{useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";
import axios from 'axios';
const ParticularFleet = (props) => {
    console.log(props.fid);
    const[fleetlist,setfleetlist] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/fleets/${props.fid}/?query=${props.fid}`).then((res)=>{
            const allfleets = res.data;
            setfleetlist(allfleets);
            console.log(res.data);
           })
   },[]);

   const setvid=(vid,vtype,vfuel)=>{
    props.setvid(vid);
    props.setvtype(vtype);
    props.setvfuel(vfuel);
   }
    return (
        
        <div style={{overflowX:"hidden"}}>
            <div className='my-4'>
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
            <div className='d-flex align-items-center my-3'>
                <div>
                <h3 className='heading'>Fleet : {props.fid}</h3>
                </div>
                
                <div className='Searchadd'>
                    <input type='search' placeholder='Search'/>
                <button type='button' className='btn btn-success btn-md mx-4 buttontext'>+</button>
                </div>
                
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>
                           Vehicle Number
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Fuel Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Date
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Actions
                        </th>
                    </thead>
                    <tbody style={{textAlign:"center",justifyContent:"center"}}>
                        {fleetlist.length >0 && fleetlist.map((item, index) => {
                            return <tr key={index}>
                            <td>{item.vehicleNo}</td>
                            <td>{item.vehicleType}</td>
                            <td>{item.fuelType}</td>
                            <td>{item.date}</td>
                            <td><span class="btn btn-xs btn-xs-default rounded border" ><i class="fa-solid fa-pen"></i></span>
                            <span class="btn btn-xs btn-xs-default rounded border" ><i class="fa-solid fa-trash"></i></span>
                               <Link to='/particularvehicle'> <span class="btn btn-xs btn-xs-default rounded border" onClick={()=> setvid(item.vehicleNo,item.vehicleType,item.fuelType)}><i class="fa-solid fa-eye"></i>
                                </span></Link>
                               
                            </td>
                            
                        </tr>

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ParticularFleet