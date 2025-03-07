import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "nike",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProductDetails({ ...productDetails, image: file });
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  

  const add_Product = async (e) => {
    // Prevent the default behavior of the form submission (e.g., page reload)
    e.preventDefault();
    console.log("Product details before upload:", productDetails);
    
    // Check if an image has been selected, if not, show an alert and stop the process
    if (!image) {
        alert("Please select an image.");
        return;
    }

    // Create a new FormData object to prepare the image for uploading
    let formData = new FormData();
    formData.append("product", image); // Append the image to the formData object with the key "product"

    try {
        // First, attempt to upload the image to the server
        const uploadResponse = await fetch("http://localhost:5000/upload", {
            method: "POST", // The HTTP method is POST because we're sending data
            headers: { Accept: "application/json" }, // Tell the server we expect a JSON response
            body: formData, // Send the FormData as the request body
        });

        // Check if the response status is OK (status code 2xx), if not, throw an error
        if (!uploadResponse.ok) throw new Error("Image upload failed.");

        // Parse the JSON response from the image upload
        const responseData = await uploadResponse.json();
        console.log("Upload response:", responseData);

        // If the upload was not successful (e.g., success is false), show an alert and stop
        if (!responseData.success) {
            alert("Image upload failed.");
            return;
        }

        // If image upload was successful, assign the returned image URL to the product details
        productDetails.image = responseData.image_url;
        console.log("Updated product details:", productDetails);

        // Next, attempt to add the product to the database
        const addProductResponse = await fetch("http://localhost:5000/addproduct", {
            method: "POST", // Again, we're sending data to the server
            headers: {
                Accept: "application/json", // Expect a JSON response
                "Content-Type": "application/json", // Tell the server that we're sending JSON data
            },
            body: JSON.stringify(productDetails), // Convert product details to a JSON string and send it
        });

        // Check if the response status is OK (status code 2xx), if not, throw an error
        if (!addProductResponse.ok) throw new Error("Product addition failed.");

        // Parse the JSON response from the add product request
        const addProductData = await addProductResponse.json();
        console.log("Add product response:", addProductData);

        // If the product was successfully added, show a success alert
        if (addProductData.success) {
            alert("Product added successfully!");
            // Refresh the page after successful addition of the product
            window.location.reload();
        } else {
            alert("Failed to add product.");
        }
    } catch (error) {
        // If any error occurs, catch it and log the error message
        console.error("Error while  product:", error);
        alert(`Error: ${error.message}`);
    }
};


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4" onSubmit={add_Product}>
        {/* Product Title */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Price & Offer Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="number"
              name="old_price"
              placeholder="Type here"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Offer Price
            </label>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="number"
              name="new_price"
              placeholder="Type here"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Product Category
          </label>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Reebok">Reebok</option>
            <option value="New Balance">New Balance</option>
            <option value="Puma">Puma</option>
          </select>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <div className="relative flex flex-col items-center justify-center w-40 h-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <FaCloudUploadAlt className="text-gray-500 text-4xl" />
                <span className="mt-2 text-sm text-gray-500">Upload</span>
              </>
            )}
            <input
              type="file"
              onChange={imageHandler}
              name="image"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
