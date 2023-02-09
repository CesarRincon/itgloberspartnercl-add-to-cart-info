import React from 'react'

type Props = {
    products: []
}

const ProductGroup=({products}:Props)=> {
    console.log("Mi productos en product group son", products)
  return (
    <div>Mi listado de producto</div>
  )
}
export default ProductGroup
