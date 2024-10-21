import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';
import { getCart } from '../../../api/CartApi';
import { getAccessToken } from '../../../untils/LocalStorage';


const CardinProductCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const fetchCart = async () => {
            const token = getAccessToken()
            const resp = await getCart(token)
            console.log(resp.data.cartItem)
            setCart(resp.data.cartItem)
        }
        fetchCart()
    }, [])

    return (
        <div className="flex flex-col justify-between p-8">
            {cart?.map((item,index) => (

                <div key={index} className="w-full">

                    <div className="flex h-36 items-center ml-10 p-4 rounded-lg mb-4 shadow-md bg-slate-50">
                        <input
                            type="checkbox"
                            className="mr-4" />

                        <img className="w-24 h-24 rounded-lg object-cover"
                            src={item.image}
                            alt={item.name} 
                            />
                
                        <div className="ml-4 flex-1">
                            <h2 className="text-lg font-semibold mb-5 text-blue-900">name</h2>
                            <p className="text-gray-500">฿ {item.price}</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-600"><Trash2 /></button>
                    </div>

                </div>
            ))}
        </div>
    );
};



export default CardinProductCart