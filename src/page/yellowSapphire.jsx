import { useState , useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from "./cartSlice";
import { useDispatch } from "react-redux";

const YellowSapphire=()=>{
   const[data,setdata]=useState([]);
   const dispatch=useDispatch();
   
   const loaddata=()=>{
    axios.get("http://localhost:3000/cards?name=yellow sapphire").then((res)=>{
        setdata(res.data)
    })
   }

   useEffect(()=>{
    loaddata();
   },[])

   const addDataToCart=(id, name, code, price, image,qty)=>{
    dispatch(addToCart({
        id:id,
        name:name,
        code:code,
        price:price,
        image:image,
        qty:qty
    }))
   }

   const answer=data.map((key)=>{
    return(
        <>
         <Card style={{ width: '18rem' }}>
      <img src={"./src/cardimages/"+key.image} alt="" />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
         {key.code}
        </Card.Text>
        <Card.Title>{key.price}</Card.Title>
        <Button variant="primary" onClick={()=>{addDataToCart(key.id, key.name, key.code, key.price, key.image , key.qty)}}>Add To Cart</Button>
      </Card.Body>
    </Card>
        </>
    )
   })
   
    return  (
        <>
        <h1>Yellow Sapphire</h1>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
        {answer}
        </div>
        </>
    )
}
export default YellowSapphire;