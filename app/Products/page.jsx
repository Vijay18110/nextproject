import React from 'react'
import Products from '../Componets/ProductSection/ProductSection'
import { products } from '../StaticData/Products'

const page = () => {
    return (
        <div className='container-fluid pt-6'>
            <div className=" pt-6">
                <Products products={products} title="Toys Section" />
                <Products products={products} title="Furnitures" />
                <Products products={products} title="Others Products" />
            </div>
        </div>
    )
}

export default page