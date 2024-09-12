// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


// const CheckOut=()=>{
// let PaymentMethod="";
//     const CheckPaymentMethod=(e)=>{
//      let payVal= e.target.value;

//      if (payVal=="debit"){
//         PaymentMethod=<DebitCard/>
//      }
//      if (payVal=="upi"){
//         PaymentMethod=<upi/>
//      }

//      if (payVal=="InternetBanking"){
//         PaymentMethod=<DebitCard/>
//      }

//      if (payVal=="CashOnDeliveryv  "){
//         PaymentMethod=<DebitCard/>
//      }



//     }
//     return(
//         <> 
//        <div  className='chkfrm'>
    
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Your Shipping Address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Contact Number</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label> Enter Your Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>


//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//     <div>
// <h2>Payment Method</h2>

// <input type='radio' name="p1" value="debit" onClick={CheckPaymentMethod} /> debit/credit cards
// <input type='radio' name="p1" value="upi"/> upi
// <input type='radio' name="p1" value="internet banking"/> internet banking
// <input type='radio' name="p1" value="cash on delivery"/> cash on delivery

//     </div>
   
    
//         </>
//     )
// }
// export default CheckOut;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import Debitcard from './Debitcard';
import Upi from './Upi';
import NetBanking from './NetBanking';
import CashOnDelivery from './CashOnDelivery';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CheckOut=()=>{
    
    const [payment,setpayment]=useState("")
    const navigate=useNavigate();

    const compchange=(e)=>{
            setpayment(e.target.value)
    }
    
    const navigatetosuccess=()=>{
      navigate('/success')
    }

    return(
    <>
    <div className='checkoutpage'>
        <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Adrress</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PinCode</Form.Label>
        <Form.Control type="text" placeholder="Enter PinCode" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Number" />
      </Form.Group>

    </Form>
        </div>
        <div className='radiobuttondiv'>
            <input type="radio" name='a' value="debit" onClick={compchange} /> Debit/Credit Card
            <input type="radio" name='a' value="upi" onClick={compchange} /> UPI
            <input type="radio" name='a' value="intbank" onClick={compchange} /> Internet Banking
            <input type="radio" name='a' value="cod" onClick={compchange} /> Cash On Delivery
            {payment=="debit"?<Debitcard/>:payment=="upi"?<Upi/>:payment=="intbank"?<NetBanking/>:payment=="cod"?<CashOnDelivery/>:<h1>Select Payment Mehod</h1>}
        </div>
    </div>
    <Button onClick={navigatetosuccess} style={{marginLeft:"50%" , marginBottom:"1%"}} variant="primary" type="submit">
        Proceed To Pay!
      </Button>
    </>
 )
}
export default CheckOut;