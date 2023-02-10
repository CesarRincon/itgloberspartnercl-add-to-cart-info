import React from "react";
//@ts-ignore
import { useProduct } from 'vtex.product-context'
//@ts-ignore
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from "./ButtonGroup";
import Totalizers from "./Totalizers";
import ProductGroup from "./ProductGroup";
//@ts-ignore
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
//@ts-ignore
import { useDevice } from 'vtex.device-detector';


const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const { isMobile } = useDevice();
  const container = generateBlockClass(styles.container, blockClass)
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();


  console.log("Este producto tiene esta info", productInfo)
  console.log("Esta se mi información de totalizer2", totalizers[0])
  console.log("Es mobile: ", isMobile)
  return (
    <>
      {isMobile ?
        <div className={container}>
          <Totalizers id={totalizers[0]?.id} name={totalizers[0]?.name} value={totalizers[0]?.value} items={items} />
          <ButtonGroup blockClass={""} />
        </div>
        :
        <div className={container}>
          <ProductGroup products={items} />
          <Totalizers id={totalizers[0]?.id} name={totalizers[0]?.name} value={totalizers[0]?.value} items={items} />
          <ButtonGroup blockClass={""} />
        </div>

      }
    </>
  )
}




export default AddToCartInfo;