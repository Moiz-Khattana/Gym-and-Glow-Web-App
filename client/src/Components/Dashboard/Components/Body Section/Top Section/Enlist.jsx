import React, { useState } from 'react';

import Sidebar from '../../SideBar Section/Sidebar';
import axios from 'axios';
import { useUser } from '../../../../../contexts/UserContext';

const Enlist = () => {
  const [businessType, setBusinessType] = useState('gym');
  const {user} =useUser()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    address: "",
    deals: "",
    image: null, // Stores the uploaded image file
    services: [], // Array to hold selected sizes
  });

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedServices = checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value);
  
      return { ...prev, services: updatedServices };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure an image is uploaded
    if (!formData.image) {
        alert("Please upload an image.");
        return;
    }

    try {
        // Create a FormData object for multipart/form-data
        const formDataPayload = new FormData();
        formDataPayload.append("image", formData.image); // Attach image
        formDataPayload.append("name", formData.name);
        formDataPayload.append("description", formData.description);
        formDataPayload.append("price", formData.price);
        formDataPayload.append("address", formData.address);
        formDataPayload.append("deals", formData.deals);  
        formDataPayload.append("type", businessType);
       formDataPayload.append("createdBy", user.email); // set actual creator dynamically      
       formDataPayload.append("services", JSON.stringify(formData.services));

        

        // Post data to the server
        await axios.post("http://localhost:5000/api/v1/serviceProvider/saveItem", formDataPayload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        alert("Service added successfully!");
      
    } catch (error) {
        console.error(error);
        alert("Failed to add Service");
    }
};

  return (
    <div className="enlistPage flex">
      <Sidebar />


      <div className="formWrapper">
        <h2>Enlist Your Business</h2>

        <div className="toggleSection">
          <label>
            <input
              type="radio"
              value="gym"
              checked={businessType === 'gym'}
              onChange={() => setBusinessType('gym')}
            />
            Gym
          </label>
          <label>
            <input
              type="radio"
              value="salon"
              checked={businessType === 'salon'}
              onChange={() => setBusinessType('salon')}
            />
            Salon
          </label>
        </div>

        <form className="enlistForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div className="inputGroup">
            <label>Business Name</label>
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputGroup">
            <label>Address</label>
            <input
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputGroup">
            <label>Description</label>
            <input
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputGroup">
            <label>Booking Deals</label>
            <input
              name="deals"
              placeholder="deals"
              value={formData.deals}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="inputGroup">
            <label>Price</label>
            <input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />

          </div>

          {businessType === 'gym' && (
            <>
              <div className="checkboxGroup">
                <label>Available Gym Services:</label>
                <div>
                <label><input type="checkbox" value="Cardio" onChange={handleCheckboxChange} /> Cardio</label>
<label><input type="checkbox" value="Weight Training" onChange={handleCheckboxChange} /> Weight Training</label>
<label><input type="checkbox" value="Yoga" onChange={handleCheckboxChange} /> Yoga</label>
<label><input type="checkbox" value="Zumba" onChange={handleCheckboxChange} /> Zumba</label>

                </div>
              </div>


            </>
          )}

          {businessType === 'salon' && (
            <>
              <div className="checkboxGroup">
                <label>Available Salon Services:</label>
                <div>
                  <label><input type="checkbox" value="Haircut" onChange={handleCheckboxChange} /> Haircut</label>
<label><input type="checkbox" value="Massage" onChange={handleCheckboxChange} /> Massage</label>
<label><input type="checkbox" value="Facial" onChange={handleCheckboxChange} /> Facial</label>
<label><input type="checkbox" value="Makeup" onChange={handleCheckboxChange} /> Makeup</label>

                </div>
              </div>

              <div className="inputGroup">
                <label>Gender-Specific Services</label>
                <select>
                  <option>Unisex</option>
                  <option>Female Only</option>
                  <option>Male Only</option>
                </select>
              </div>
            </>
          )}

          <div className="inputGroup">
            <label>Upload Photos</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

          </div>

          <button onClick={handleSubmit} className="submitBtn">Submit</button>
        </form>
      </div>
    </div>

  );
};

export default Enlist;
