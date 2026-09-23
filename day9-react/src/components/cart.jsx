import useCartStore from "../store/cartStore";

function Cart(){
    const items = useCartStore((state) => state.items);
    const addItem = useCartStore((state) => state.addItem);
    const clearCart = useCartStore((state) => state.clearCart)
 
    
    const product = {
        id : 1,
        name: "laptop",
        price : 8000,
    }

    const  totalQuality = items.reduce(
        (total, item) => total +  item.quality, 0
    );

    return(
        <div>
            <h1>Day 9 - Zustand persist</h1>
            <h2>Total Items : {totalQuality}</h2>

            <button onClick={() => addItem(product)}>Add Laptop</button>

            <button onClick={clearCart}>Clear Cart</button>

            {items.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price : Rs.{item.price}</p>
                    <p>Quality : {item.quality}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;