import React, { useState, useEffect } from 'react';

function PriceFilterSearch() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const productInfo = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Unable to fetch the products");
        }

        const data = await res.json();
        setProducts(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    productInfo();
  }, []);

  const productfilter = products.filter(product =>
    search === "" || product.price <= Number(search)
  );

  return (
    <div>
      <h4>Task 5: Fetch API with price filter</h4>

      {loading && <p>Loading...</p>}
      {!loading && error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <>
          <input
            type="number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter max price"
          />

          {productfilter.length === 0 ? (
            <p>No products found</p>
          ) : (
            <ul>
              {productfilter.map(product => (
                <li key={product.id}>
                  <p>{product.title}</p>
                  <p>₹ {product.price}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default PriceFilterSearch;
