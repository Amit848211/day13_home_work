import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './component/Products'
import Cart from './component/Cart'

function App() {
  const[price,setPrice]=useState(0)
  const[cart,setCart]=useState([
    {id: 1, name: "Product-1", price:100, quantity:0},
    {id: 2, name: "Product-2", price:200, quantity:0},
    {id: 3, name: "Product-3", price:300, quantity:0},
    {id: 4, name: "Product-4", price:400, quantity:0},
    {id: 5, name: "Product-5", price:500, quantity:0},
    ])
  
  console.log("cart",cart,price);
  function PriceCalculate(){
        let temp = 0
        cart.map((item)=>{
          temp +=(item.price*item.quantity)
        })
        setPrice(temp)
  }



  useEffect(()=>{
    PriceCalculate()
  },[])

  return (
    <>
     <div className='flex  items-center gap-20 px-40'>
        <Products setPrice={setPrice} Products={cart} setCart={setCart} />
        <Cart  cart={cart} price={price}/>
     </div>
    </>
  )
}

export default App
