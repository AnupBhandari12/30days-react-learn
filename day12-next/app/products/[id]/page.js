export default async function ProductDetails({params}) {
    const {id} = await params;

    const response = await fetch(
         `https://dummyjson.com/products/${id}`,
         {
         next : {
            revalidate: 60,
         },

         }
    );

    const product = await response.json();

    return (
        <main>
            <h1>Product Details</h1>

            <h2>{product.title}</h2>

            <p>Price: ${product.Price}</p>

            <p>{product.discription}</p>

            <p>Categort : {product.category}</p>

            <p>Rating : {product.rating}</p>

            <p>Stock : {product.Stock}</p>
            
            <p>Brand : {product.brand}</p>
            
        </main>
    )
}