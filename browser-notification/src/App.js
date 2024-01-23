import { useEffect } from "react";
import './App.css';

function App() {

  useEffect(() => {
    
    if("Notification" in window) {
      if(Notification.permission !== "granted")
      {
        Notification.requestPermission();
      }
    } else { 
      console.log("Notifications not supported in this browser")
    }
  }, [])
  
  const handleShowNotification=()=>{
    console.log(Notification.permission)
    if(Notification.permission==="granted")
    {
      const notification= new Notification("Hello, this is your notification!")

      notification.onclick=()=>{
        console.log("Notification Clicked")
      }
    }
  }
  return (
    <div style={{textAlign:"center",paddingTop:8}}>
      <button onClick={handleShowNotification}>Show Notification</button>
    </div>
  );
}

export default App;
