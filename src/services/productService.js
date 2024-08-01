const API_URL = import.meta.env.VITE_API_URL;

export async function getProductList(searchTerm) {
  const response = await fetch(
    `${API_URL}/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  const data = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`);
  const data = await response.json();
  return data;
}

export async function getFeaturedProduct() {
  const response = await fetch(`${API_URL}/featured_products`);
  const data = await response.json();
  return data;
}
