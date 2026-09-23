import useCartStore from "../store/cartStore";

function Cart(){
    const items = useCartStore((state) => state.items)
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);

    const product = {
        id : 1,
        name : "laptop",
        price : 8000,
    };

      const totalQuality = items.reduce(
    (total, item) => total + item.quality,
    0
  );


    return(
        <div>
            <h2>Cart</h2>

            <h3>Total Items : {items.length}</h3>
                  <h3>Total Items: {totalQuality}</h3>


            <button onClick={() => addItem(product)}>Add Laptop</button>

            <button onClick={clearCart}>Clear Cart</button>

            {items.map((item , index)=>(
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>Rs. {item.price}</p>
                    <p>Quality : {item.quality}</p>

                    <button onClick={() => removeItem(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Cart;