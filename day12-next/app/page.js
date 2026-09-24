import Link from "next/link";


export default async function Home() {
  const response = await fetch(
            "https://dummyjson.com/products?limit=5",
            {
              cache : "no-store"
            }
  );

  const data = await response.json()

  return (
    <main>
      <h1>Product </h1>

      <h2>Product  Information</h2>
      {data.products.map((product) => {
        return(

          <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>Price : ${product.price}</h2>
          <Link href={`/products/${product.id}`}>
          View Details
          </Link>
        </div>
        )
      })}

    </main>
  );
}