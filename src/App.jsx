import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Scrollbar from './Components/Scrollbar'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Ad from './Components/Ad'
import {arr} from './Data'
import {arr2} from './Data'
import {arr3} from './Data'
import {arr4} from './Data'
import {arr5} from './Data'
// import Footer from './Components/Footer'
function App(){
    let [name,setName]=useState("HTML Tutorial");
    let [para,setPara]=useState("HTML is the standard markup language for Web pages.");
    let [easy,setEasy]=useState("Easy Learning with HTML , Try it Yourself");
    let [para2,setPara2]=useState("HTML is used to develop static websites.");
    let [para3,setPara3]=useState("HTML is easy to learn - You will enjoy it!");


    let click=(num)=>{
        if(num==1){
        setName(arr[0])
        setPara(arr2[0])
        setEasy(arr3[0])
        setPara2(arr4[0])
        setPara3(arr5[0])
        }
        if(num==2){
            setName(arr[1])
            setPara(arr2[1])
            setEasy(arr3[1])
            setPara2(arr4[1])
            setPara3(arr5[1])
        } 
        if(num==3){
            setName(arr[2])
            setPara(arr2[2])
            setEasy(arr3[2])
            setPara2(arr4[2])
            setPara3(arr5[2])
        } 
        if(num==4){
            setName(arr[3])
            setPara(arr2[3])
            setEasy(arr3[3])
            setPara2(arr4[3])
            setPara3(arr5[3])
        } 
        if(num==5){
            setName(arr[4])
            setPara(arr2[4])
            setEasy(arr3[4])
            setPara2(arr4[4])
            setPara3(arr5[4])
        } 
    }
        return(
            <div>
            <Navbar/>
            <Scrollbar/>
            <Sidebar click={click}/>
            <Content heading={name} para={para} easy={easy} para2={para2} para3={para3}/>
            <Ad/>
            </div>
        )
    }
export default App;




