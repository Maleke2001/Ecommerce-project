import { useEffect, useState } from "react";

export const useFetchCategory = () =>{
    
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/category");
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        setCategories(data);
        // console.log(data);
        
      } catch (error) {
        console.error("Error fetching categories:", error);
        // setError(error.message);
      }
    };

    fetchCategory();
  }, []);

  return{categories};
}