import React from 'react'

function Subtotal({cartItems}) {
  const subtotal = cartItems
    .reduce(
      (acc, item) =>
        acc +
        (item.quantity > 0 ? Number(item.qty) || 1 : 0) * Number(item.price),
      0
    )
    .toFixed(2);

  return (
    <>
      {subtotal}
    </>
  )
}

export default Subtotal