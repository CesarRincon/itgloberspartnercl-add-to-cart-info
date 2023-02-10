import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'
import './styles.css'

type Props = {
  products: []
}

const ProductGroup = ({ products }: Props, { blockClass }: { blockClass: string }) => {
  console.log("Mi productos en product group son", products)

  const container__items = generateBlockClass(styles.container__items, blockClass)
  const container__image = generateBlockClass(styles.container__image, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)

  return (
    <div className={container__items}>
      {
        products.map((item: any, i: number) => {
          console.log("este es mi item", item, i)
          return (
            <div key={i} className={container__item}>
              <div className={container__image}>
                <img src={item.imageUrls.at1x} />
              </div>
              <div>
                <h2>{item.name}</h2>
                {/* <p>{item.id}</p> */}
                <p>Precio: ${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default ProductGroup
