import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to install react-router-dom
import './Home.css';

export const Home = () => {
  const [functionName, setFunctionName] = useState('');
  const [date, setDate] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file), // Create a preview URL
    }));
    setImages((prevImages) => [...prevImages, ...newImages]); // Append new images to existing ones
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);

    // Revoke the URL for the removed image
    URL.revokeObjectURL(images[index].preview);

    setImages(updatedImages);
  };

  const handleNavigate = () => {
    const imageFiles = images.map((image) => image.file);
    const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
    const imageParams = imageUrls.join(','); // Join image URLs with a comma for query string
    navigate(`/contact?functionName=${functionName}&date=${date}&images=${imageParams}`);
  };

  return (
    <div className='HomeContainer'>
      {/* Header Section */}
      <header className='HomeHeader'>
        <div className='HeaderContent'>
          <h1>Arul Anandar College</h1>
          <h2>Geo Tag Photo Project</h2>
        </div>
      </header>

      {/* <h2>Welcome to the Home Page!</h2> */}
      <input
        type="text"
        placeholder="Enter Function Name"
        value={functionName}
        onChange={(e) => setFunctionName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />
      <div className="image-preview">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.preview}
              alt={`preview-${index}`}
              className="preview-image"
            />
            <button
              className="remove-image"
              onClick={() => handleRemoveImage(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* <p>Total Images: {images.length}</p> */}
      <button onClick={handleNavigate}>Submit</button>
    </div>
    
  );

};
