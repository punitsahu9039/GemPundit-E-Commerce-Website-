import { useSelector, useDispatch } from "react-redux";
import { decProduct, incProduct, removeItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';


const Cart = () => {

  const MyCartData = useSelector((state) => state.cart.cards)
  const dispatch = useDispatch();
  let grandtotal = 0;
  const navigate = useNavigate();

  const navigatetocheckout = () => {
    navigate("/checkout")
  }

  const CartData = MyCartData.map((key) => {
     grandtotal = grandtotal + key.qty * key.price;
    return (
      <>
        <tr >
          <td><img src={"./src/cardimages/" + key.image} alt="" height="100px" width="100px" /></td>
          <td>{key.name}</td>
          <td>{key.code}</td>
          <td>
            <button onClick={() => { dispatch(decProduct(key.id)) }}>-</button>
            {key.qty}
            <button onClick={() => { dispatch(incProduct(key.id)) }}>+</button>
          </td>
          <td>{key.price}</td>
          <td>{key.qty * key.price}</td>
          <td><button onClick={() => { dispatch(removeItem(key.id)) }}>Remove</button></td>
        </tr>
      </>
    )
  })

  return (
    <>
    <div style={{justifyContent:"center"}}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope=""></th>
            <th scope="name">Name</th>
            <th scope="code">Code</th>
            <th scope="code">Quantity</th>
            <th scope="Price">Price</th>
            <th scope="Price">Total</th>
            <th></th>
          </tr>
          {CartData}
        </thead>
      </Table>
      
      <div style={{ marginLeft: "900px" }}>
        Total:{grandtotal}
        < button onClick={navigatetocheckout}>Check out</button>
      </div>
      </div>
    </>
     
  )
}
export default Cart;