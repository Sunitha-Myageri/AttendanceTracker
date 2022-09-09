import { useState } from "react";
const AttendenceComp=()=>{
    const [attendenceDate,setAttendenceData]=useState([]);
    const [searcquery, setSearchQuery] = useState('');
    const OnChangeAttendence=()=>{
        var selectedoption = document.getElementById("attendence");
        console.log(selectedoption.value);
    }
    const OnchangeHandle=()=>{
        var id = document.getElementById("id");
        console.log(id.value);
    }
    const OnClickHandle=()=>
    {       
        var data = {
                    id:document.getElementById("employeeId").value,
                    name:document.getElementById("employeeName").value,
                    attenddate:document.getElementById("date").value,
                    attendence:document.getElementById("attendence").value
                    };
        setAttendenceData([...attendenceDate ,data]);
    }
    const OnchangeHandleSearch=()=>{
        setSearchQuery(document.getElementById("search").value);
    }
    return(<>
    <h3>Add Attendence of an Employees</h3>
   Select Employe ID : <select id="employeeId" >
    <option>Select</option>
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
       <option>6</option>
   </select>
   <br></br>
   Select Employe Name : <select id="employeeName" >
    <option>Select</option>
       <option>Sunitha</option>
       <option>Basavaraj</option>
       <option>Ramesh</option>
       <option>Sharu</option>
       <option>Mamtha</option>
       <option>Pooja</option>
   </select>
   <br></br>
   Select Date: <input type="date" id="date"  ></input>
   <br></br> 
   Select Attendence Status: <select id="attendence" >
       <option>Select</option>
       <option>Present</option>
       <option>Absent</option>
       <option>On Leave</option>
       <option>Holiday</option>
   </select>
   <br></br>   
   <input type="button" value="Submit" onClick={OnClickHandle}></input>
   <hr></hr>
   <h3>Attendence List of Employees</h3>
   <input type="text" id="search" placeholder="Search by Employee-id" onChange={OnchangeHandleSearch}></input>
   <hr></hr>
   <table style={{padding:"10px", border :"1px solid black"}}>
        <tr style={{border:"1px solid black"}}>
           <th style={{border:"1px solid black"}}>Employee Id</th>
           <th style={{border:"1px solid black"}}>Employee Name</th>
           <th style={{border:"1px solid black"}}>Date</th>           
           <th style={{border:"1px solid black"}}>Attendence</th>
       </tr>  
    {
        attendenceDate.filter((item)=>{
            return(
                item.id.includes(searcquery)
            )
        }).map((item)=>{
        return(<>
        <tr>
            <td style={{border:"1px solid black"}}>{item.id}</td>
            <td style={{border:"1px solid black"}}>{item.name}</td>
            <td style={{border:"1px solid black"}}>{item.attenddate}</td>
            <td style={{border:"1px solid black"}}>{item.attendence}</td>
        </tr>        
        </>);
    })}
    </table>
    </>);    
};
export default AttendenceComp;