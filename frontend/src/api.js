const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const productAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const res = await fetch(`${API_URL}/products?${params}`);
    const data = await res.json();
    return data;
    //return res.json();
  },
  getById: async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`);
    const data = await res.json();
    return data;
    //return res.json();
  },
  calculatePrice: async (id, data = {}) => {
    const res = await fetch(`${API_URL}/products/${id}/calculate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
    //return res.json();
  },
};
