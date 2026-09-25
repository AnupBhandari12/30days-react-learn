export default async function ProductsPage() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
        "https://dummyjson.com/products?limit=5"
    );

    if(!response){
        throw new Error("Failed to load products");
    }

    const data = await response.json();

    return (
        <main>
            <h1>Products</h1>

            {data.products.map((product)=> (
                <div key={product.id}>
                    <h2>{product.id}</h2>
                    <p>{product.title}</p>
                    <p>Price : ${product.price}</p>
                </div>
            ))}
        </main>
    )
}