import React,{useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import '../Landing/LandingPage.css'
import axios from 'axios';


const LandingPage = () => {
    const[fleet,setfleet] = useState('');
    useEffect(() => {
       axios.get('http://localhost:8080/api/fleets').then((res)=>{
        const allfleets = res.data;
        setfleet(allfleets);
        console.log(res.data);
       })
   }, []);

  const deleteUser=(index)=> {
    let id = fleet[index].fleetId;
    axios.delete(`http://localhost:8080/api/fleets/${id}`).then((res) => {
      console.log(res.data)
      axios.get('http://localhost:8080/api/fleets').then((res)=>{
        const allfleets = res.data;
        setfleet(allfleets);
        console.log(res.data);
       })
      
    })




  }
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div>
                <h3 className='heading'>Fleet Management</h3>
                </div>
                
                <div className='Searchadd'>
                    <input type='search' placeholder='Search'/>
                <button type='button' className='btn btn-success btn-md mx-4 buttontext'>+</button>
                </div>
                
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{textAlign:"center"}}>
                            Fleet ID
                        </th>
                        <th style={{textAlign:"center"}}>
                            Vehicle Count
                        </th>
                        <th style={{textAlign:"center"}}>
                            Date & Time
                        </th>
                        <th style={{textAlign:"center"}}>
                           Actions
                        </th>
                    </thead>
                    <tbody style={{textAlign:"center",justifyContent:"center"}}>
                        {fleet.length >0 && fleet.map((item, index) => {
                            return <tr key={index}>
                            <td>{item.fleetId}</td>
                            <td>{item.fleetSize}</td>
                            <td>{item.dateTime}</td>
                            <td><span class="btn btn-xs btn-xs-default rounded border" ><i class="fa-solid fa-pen"></i></span>
                            <span class="btn btn-xs btn-xs-default rounded border" onClick={()=>deleteUser(index)}><i class="fa-solid fa-trash"></i></span>
                            <span class="btn btn-xs btn-xs-default rounded border"><i class="fa-solid fa-eye"></i></span>
                            </td>
                        </tr>

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LandingPage