import React from "react";
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {

    const container__buttonGroup = generateBlockClass(styles.container__buttonGroup, blockClass)


    return (
        <div className={container__buttonGroup}>

            <a href="/checkout/#/profile">CHECK OUT</a>

            <button>Continua comprando</button>
            <a href="/">VER CARRITO</a>

        </div>
    )
}

export default ButtonGroup;