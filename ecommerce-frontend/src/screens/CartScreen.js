import React from 'react'

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1]): 1
    //value of qty returns ?qty={qty} part of url in productscreen
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : PRODUCTID: {productId} Qty: {qty} </p>
        </div>
    )
}
