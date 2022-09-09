import { BrowserRouter,Routes, Route,Router } from "react-router-dom";
import './Flexbox1.css';
import { Link,nav } from 'react-router-dom';
import Students from './Students';

const MycollegeWebsite=()=>
{
return(<>
<div>
<div id="marquee head">
<marquee style={{color:"white",background:"blue"}}>Welcome to our new brand Website</marquee>
</div>

<p>Home</p>
<BrowserRouter>
<Routes>
    <Route path="/students" element={<Students/>}></Route>
</Routes>
</BrowserRouter>

<div className="flex-container">
<div>About Us</div>
<div>Academics</div>
<div>Admissions</div>
<div>Research</div>
<div>Campus Life</div>
<div>Examination</div>
<div>Placements</div>
</div>
</div>
</>);
}
export default MycollegeWebsite;