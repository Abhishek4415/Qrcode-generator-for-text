import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import "./qr.css"
export default function QRcode(){
    let [finaltext,setfinaltext]=useState('code');
    let [inputvalue,setinputvalue]=useState('');
    let [bgcolor,setbgcolor]=useState('#000000')
    let [color,setcolor]=useState('#ffffff');
    let [dimension,setdimension]=useState(400);
    let [qrcode,setqrcode]=useState("");

    //changing the url only when the user change the input
    useEffect(()=>{
        const qrcodeurl=`http://api.qrserver.com/v1/create-qr-code/?data=${finaltext}!&size=${dimension}x${dimension}&bgcolor=${bgcolor.substring(1)}&color=${color.substring(1)}`;
        setqrcode(qrcodeurl);
    },[finaltext,dimension,bgcolor,color])




    let handleinput=(event)=>{
        setinputvalue(event.target.value)
    };

    function handleclick(){
        setfinaltext(inputvalue);
        setinputvalue('');
    }

    console.log(inputvalue);
    console.log(color);
    console.log(dimension);
    console.log(bgcolor);


    return (
        <div className='qr-conatainer'>
            <input type="text" 
            placeholder="Enter your code" 
            value={inputvalue}
            onChange={handleinput}
            className='input-field'

            /> &nbsp; &nbsp;
            <Button variant='contained' onClick={handleclick}>Generate</Button>
            <br /> <br />

            <span>Color : &nbsp;&nbsp;</span> 
            <input type="color" 
            value={color} 
            onChange={(e)=>setcolor(e.target.value)} 
            className='color-input'
            /> 
            &nbsp; BG color &nbsp;
            <input type="color"
             value={bgcolor}
              onChange={(e)=>setbgcolor(e.target.value)}
               />
            <br></br> <br />
            <span>Resolution : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input type="range"
             min="100" max="500"
             value={dimension} 
            onChange={(e)=>setdimension(e.target.value)} 
            className='dimension-input'
             />

            <br /><br />
            <div className='qr-code-container' >
                <img src={qrcode} alt="Qr code" className='qr-code-image' />
                <a href={qrcode} download="Gfg"> <br /><br />
                 <Button variant='contained' color='success'>Download</Button>
                </a>
            </div>


        </div>
    );
}


// notes
// e.target.value.substring(1)  skip first letter
