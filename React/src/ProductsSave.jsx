import axios from 'axios';
import React, { useRef } from 'react';

function ProductsSave() {
  // Creating refs for each field
  
  const nameRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
   
    formData.append('name', nameRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('category', categoryRef.current.value);
    formData.append('image', imageRef.current.files[0]);

   
      const response = axios.post('http://localhost:4444/api/v1/savedata',{formData});

    
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Product Form</h1>
      <form onSubmit={()=>handleSubmit()}>
        
        <div>
          <label>Product Name:</label>
          <input type="text" ref={nameRef} placeholder="Enter Product Name" required />
        </div>
        <div>
          <label>Product Price:</label>
          <input type="number" ref={priceRef} placeholder="Enter Product Price" step="0.01" required />
        </div>
        <div>
          <label>Product Category:</label>
          <input type="text" ref={categoryRef} placeholder="Enter Product Category" required />
        </div>
        <div>
          <label>Product Image:</label>
          <input type="file" ref={imageRef} required />
        </div>
        <button type="button" style={{ marginTop: '20px' }}>Submit</button>
      </form>
    </div>
  );
}

export default ProductsSave;
