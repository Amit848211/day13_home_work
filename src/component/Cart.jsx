import React, { useState } from 'react'

function Cart({cart,price}) {






  return (
    <>
    <div className='w-[500px] h-auto border-[5px] flex flex-col justify-between border-gray-500  mt-20 px-5 py-4'>
         <h1 className='text-2xl font-semibold text-center'>Cart</h1>  <div>
         {price===0?<><h1 className='text-2xl text-center'>Cart is empty</h1></>:
        
         cart.map((item,index)=>{
          if(item.quantity>0){

          
            return <>
                <div key={index} className='w-full h-10 bg-gray-600 mt-4 px-2 flex justify-between items-center'>
                     <p className='text-white font-semibold'>{item.name}</p>
                      <p className='text-white font-semibold'>{item.quantity}x{item.price}</p>
                

                </div>
            </>
          }
         })
        }
        </div>

        <hr className='h-[5px] bg-gray-600 mt-10'></hr>
        <div className='mt-5 w-full h-14 px-2 bg-gray-600 flex justify-between items-center'>
        <h1 className='text-2xl text-white font-semibold'>Total Price</h1>
        <p  className='text-2xl text-white font-semibold'>{price}</p>

        </div>
         
    </div>
</>
  )
}

export default Cart