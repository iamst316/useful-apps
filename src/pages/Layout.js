import { Link,Outlet } from "react-router-dom";

export default function(){
    return (<>
        <ul type='none'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/timer'>Timer</Link>
            </li>
            <li>
                <Link to='/todo'>To-Do</Link>
            </li>
        </ul>
        <hr/>
        <Outlet/>
    </>)
}