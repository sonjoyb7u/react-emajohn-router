import { useEffect } from "react";
import { useState } from "react";

function useProducts () {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const url = `/products.JSON`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))

    }, [])
    
    return [products, setProducts]
}



export default useProducts