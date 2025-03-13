import { useEffect,useState } from "react";
import Provider1 from './Provider1';

export default function Notification() {
    const name = sessionStorage.getItem("username");
    const [data, setData] = useState([]);
    const [ newdata, setNewdata] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:8000/liked')
      .then((response)=>response.json())
      .then((data1)=>{
        setData(data1);
      })
    },[])
    useEffect(()=>{
      setNewdata((data.filter((item)=>item.pname===name)));
    },[data])

    console.log(newdata.length);
    return (<>
        <Provider1 />
        <div>
        <h1>
            Notification
        </h1>
        </div>
   </> )
}