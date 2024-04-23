import React from 'react'

function Products({Products,setCart,setPrice}) {
   

   

    function increament (index){
        const temp=[...Products]
       temp.filter((item)=>{
            if(item.id === index){
                item.quantity +=1;
                setPrice((prev)=>prev+item.price)
            }
            return item;
        })
        setCart(temp)

    }
    function decreament (index){
        const temp=[...Products]
       temp.filter((item)=>{
            if(item.id === index && item.quantity >0){
                item.quantity -=1;
                setPrice((prev)=>prev-item.price)
            }
            return item;
        })
        setCart(temp)

    }
  


  return (
    <>
        <div className='w-[500px] h-[400px] border-[5px] border-gray-500  mt-20 px-5 py-4'>
             <h1 className='text-2xl font-semibold text-center'>Products</h1>  
            {
             Products.map((item,index)=>{
                return <>
                    <div key={index} className='w-full h-10 bg-gray-600 mt-4 px-2 flex justify-between items-center'>
                    <p className='text-white font-semibold'>{item.name}</p>
                    <p className='text-white font-semibold'>{item.price}</p>
                    <div className='w-auto h-auto px-2 rounded-full bg-green-500 flex gap-3'>
                        <button className='text-white text-2xl font-semibold'
                        onClick={()=>decreament(item.id)}>-</button>
                        <p className='text-white text-2xl font-semibold'>{item.quantity}</p>
                        <button className='text-white text-2xl font-semibold'
                        onClick={()=>increament(item.id)}>+</button>
                    </div>

                    </div>
                </>
             })
            }
        </div>
    </>
  )
}

export default Products