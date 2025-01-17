import HomeData from "./Components/HomeData";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YellowSapphire from "./page/yellowSapphire";
import Cart from "./page/Cart";
import CheckOut from "./page/CheckOut";
import Success from "./page/Success";
import Debitcard from "./page/Debitcard";
import Upi from "./page/Upi";
import NetBanking from "./page/NetBanking";
import CashOnDelivery from "./page/CashOnDelivery";
import Search from "./page/Search";
import BlueSapphire from "./page/BlueSapphire";
import GreenSapphire from "./page/GreenShappire";
import RedSapphire from "./page/RedShappire";

const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeData />} />
            <Route path="yellowsapphire" element={<YellowSapphire />} />
            <Route path="home" element={<HomeData />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="success" element={<Success />} />
            <Route path="Debitcard" element={<Debitcard />} />
            <Route path="Upi" element={<Upi />} />
            <Route path="NetBanking" element={<NetBanking />} />
            <Route path="CashOnDelivery" element={<CashOnDelivery />} />
            <Route path="Search" element={<Search />} />
            <Route path="bluesapphire" element={<BlueSapphire />} />
            <Route path="greensapphire" element={<GreenSapphire />} />
            <Route path="redsapphire" element={<RedSapphire />} />
          </Route>
        </Routes>
      </BrowserRouter>
            
       



    </>

  )
}
export default App;