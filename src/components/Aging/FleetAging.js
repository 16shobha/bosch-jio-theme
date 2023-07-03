import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

const FleetAging = () => {
    const[aging,setaging] = useState([]);
    const[fleets,setfleets]= useState([]);
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
    axios.get(`http://localhost:8080/fleets/${selectedfleet}/?query=${selectedfleet}`).then((res)=>{
        const allfleets = res.data;
        setaging(allfleets);
        console.log(res.data);
        if(aging.length===0){
            setemptymsg('No record present...')
        }
       })
   }
   console.log(selectedfleet);
    return (
      
        <div>
            <div className='my-3 mx-3'>
                <form >
                    <div className='d-flex flex-row'>
                    <div>
                    <label className='labeltext' for="fleet">Select Fleet :</label>
                    </div>
                    
                    <div className='mx-2 my-1'>
                    <select id="fleet" name="fleets"
                    onChange={(e)=> setselectedfleet(e.target.value)}>
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
                    <button type="submit" className='btn btn-sm btn-success my-3' onClick={()=>displaydata(selectedfleet)} > Submit</button>
                </form>
            </div>
            {(selectedfleet==='' || aging.length===0)  ?<div className='emptymsgstyle d-flex align-items-center justify-content-center'>{emptymsg}</div>:
            <div className='displaydata'>
            <div >
                <h3 className='heading'>Aging Status</h3>
            </div>
            <div class="table-responsive bg-light mx-3">
                <table class="table">
                    <thead>
                        <th style={{ textAlign: "center" }}>
                            Vehicle Number
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Battery Type
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Battery Installation Date
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Battery Expiration Date
                        </th>
                        <th style={{ textAlign: "center" }}>
                            Breakdown Risk
                        </th>
                    </thead>
                    <tbody style={{ textAlign: "center", justifyContent: "center" }}>
                    {aging.length >0 && aging.map((item, index) => {
                            return <tr key={index}>
                            <td>{item.vehicleNo}</td>
                            <td>{item.batteryType}</td>
                            <td>{item.batteryInstallationDate}</td>
                            <td>{item.batteryExpirationDate}</td>
                            <td>{item.breakdownRisk}</td>
                        </tr>

                        })}
                    </tbody>
                </table>
            </div>
            </div>}
        </div>
    )
}

export default FleetAging