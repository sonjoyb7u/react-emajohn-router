import { useEffect } from "react"
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCarts = products => {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        if(products.length) {
            const savedStorCarts = getStoredCart()
            const newStoreCart = []
            for (const key in savedStorCarts) {
                const productExists = products.find(product => product.key === key)
                if(productExists) {
                    const qty = savedStorCarts[key]
                    productExists.quantity = qty
                    newStoreCart.push(productExists)
                }
            }
            setCarts(newStoreCart)
        }

    }, [products])

    return [carts, setCarts]

}


export default useCarts