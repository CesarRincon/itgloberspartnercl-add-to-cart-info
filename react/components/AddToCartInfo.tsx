import React from "react";
//@ts-ignore
import { useProduct } from 'vtex.product-context'
//@ts-ignore
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from "./ButtonGroup";
import Totalizers from "./Totalizers";
import ProductGroup from "./ProductGroup";


const AddToCartInfo = () => {
    const productInfo = useProduct();
    const { orderForm: {
        items,
        totalizers
    } } = useOrderForm();
    console.log("Este producto tiene esta info", productInfo)
    console.log("Esta se mi información de orden", items, totalizers)
    return (
        <>
            <ProductGroup products={items}/>
            <Totalizers />
            <ButtonGroup />
        </>
    )
}

export default AddToCartInfo;