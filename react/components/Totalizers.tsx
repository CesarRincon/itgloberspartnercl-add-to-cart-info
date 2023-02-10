import React from "react";


const Totalizers = ({ id, name, value, items }: any) => {
    console.log(id, name)
    return (
        <div>
            <h4>Tenemos {items.length} items en tu compra</h4>
            <h4>Total: ${value / 100}</h4>
        </div>
    )
}

export default Totalizers;