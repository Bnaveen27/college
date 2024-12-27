// import React, { useEffect, useState } from 'react';
// import './Contact.css';
// import { useLocation } from 'react-router-dom'; // Make sure to install react-router-dom

// export const Contact = () => {
//   const [data, setData] = useState({
//     functionName: '',
//     date: '',
//     images: []
//   });

//   const location = useLocation();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const images = queryParams.get('images') ? queryParams.get('images').split(',') : [];
//     setData({
//       functionName: queryParams.get('functionName') || '',
//       date: queryParams.get('date') || '',
//       images: images || []
//     });

//     // Set a timeout to call window.print() after 2 seconds
//     const timer = setTimeout(() => {
//       window.print();
//     }, 2000);

//     // Cleanup the timeout if the component is unmounted
//     return () => clearTimeout(timer);

//   }, [location]);

//   return (
//     <div className='contact'>
//       <div className="header">

//       </div>
//       <div className="titleContent">
//         <span className='functionName'>{data.functionName}</span>
//         <span className='date'>Date: &nbsp; <p>{data.date}</p></span>
//       </div>
//       <div className="ImageContainer">
//         <div className='imageContent'>
//           {data.images.length > 0 ? (
//             data.images.map((image, index) => (
//               <img key={index} src={image} alt={`Uploaded ${index}`} style={{ width: 100, height: 100, marginRight: 10 }} />
//             ))
//           ) : (
//             <p>No images uploaded.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useLocation } from 'react-router-dom'; // Make sure to install react-router-dom

export const Contact = () => {
  const [data, setData] = useState({
    functionName: '',
    date: '',
    images: []
  });

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const images = queryParams.get('images') ? queryParams.get('images').split(',') : [];
    setData({
      functionName: queryParams.get('functionName') || '',
      date: queryParams.get('date') || '',
      images: images || []
    });

    // Set a timeout to call window.print() after 2 seconds
    const timer = setTimeout(() => {
      window.print();
    }, 2000);

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timer);

  }, [location]);

  return (
    <div className='contact'>
      {/* Header Section */}
      <div className="header">
        <h1>Arul Anandar College</h1>
        <h2>Geo Tag Photo Project</h2>
      </div>

      <div className="titleContent">
        <span className='functionName'>{data.functionName}</span>
        <span className='date'>Date: &nbsp; <p>{data.date}</p></span>
      </div>

      {/* Hide images and the image input section for the print view */}
      <div className="ImageContainer">
        <div className='imageContent'>
          {data.images.length > 0 ? (
            data.images.map((image, index) => (
              <img key={index} src={image} alt={`Uploaded ${index}`} style={{ width: 100, height: 100, marginRight: 10 }} />
            ))
          ) : (
            <p>No images uploaded.</p>
          )}
        </div>
      </div>

      {/* Hide the image input and other elements in the print version */}
    </div>
  );
};
