import React, { useState } from 'react';
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';

const EventManagement = () => {
  const { user } = useUser(); // Assuming user contains at least an `email`
  const [eventType, setEventType] = useState('gym');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    audienceSize: '',
    activities: [],
    poster: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedActivities = checked
        ? [...prev.activities, value]
        : prev.activities.filter((activity) => activity !== value);

      return { ...prev, activities: updatedActivities };
    });
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, poster: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.poster) {
      alert("Please upload an event poster.");
      return;
    }

    try {
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("description", formData.description);
      payload.append("location", formData.location);
      payload.append("date", formData.date);
      payload.append("time", formData.time);
      payload.append("size", formData.audienceSize);
      payload.append("createdBy", user.email);
      payload.append("activities", JSON.stringify(formData.activities));
      payload.append("image", formData.poster);
      payload.append("type", eventType);


      await axios.post("http://localhost:5000/api/v1/event/saveevent", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Event proposal submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit event proposal.");
    }
  };

  return (
    <div className="eventManagementPage flex">
      <Sidebar />

      <div className="formWrapper">
        <h2>Propose an Event</h2>

        <div className="toggleSection">
          <label>
            <input
              type="radio"
              value="gym"
              checked={eventType === 'gym'}
              onChange={() => setEventType('gym')}
            />
            Gym Event
          </label>
          <label>
            <input
              type="radio"
              value="salon"
              checked={eventType === 'salon'}
              onChange={() => setEventType('salon')}
            />
            Salon Event
          </label>
        </div>

        <form
          className="eventForm"
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <div className="inputGroup">
            <label>Event Title</label>
            <input name="title" type="text" placeholder="e.g. Summer Fitness Expo" onChange={handleInputChange} required />
          </div>

          <div className="inputGroup">
            <label>Event Description</label>
            <textarea name="description" placeholder="Describe the purpose, audience, and highlights..." onChange={handleInputChange} required />
          </div>

          <div className="inputGroup">
            <label>Location</label>
            <input name="location" type="text" placeholder="City / Venue" onChange={handleInputChange} required />
          </div>

          <div className="inputGroup">
            <label>Date</label>
            <input name="date" type="date" onChange={handleInputChange} required />
          </div>

          <div className="inputGroup">
            <label>Time</label>
            <input name="time" type="time" onChange={handleInputChange} required />
          </div>

          <div className="inputGroup">
            <label>Expected Audience Size</label>
            <input name="audienceSize" type="number" placeholder="e.g. 100 - 500" onChange={handleInputChange} required />
          </div>

          {eventType === 'gym' && (
            <div className="checkboxGroup">
              <label>Featured Gym Activities:</label>
              <div>
                <label><input type="checkbox" value="Bodybuilding Showcase" onChange={handleCheckboxChange} /> Bodybuilding Showcase</label>
                <label><input type="checkbox" value="Cardio Challenges" onChange={handleCheckboxChange} /> Cardio Challenges</label>
                <label><input type="checkbox" value="Fitness Workshops" onChange={handleCheckboxChange} /> Fitness Workshops</label>
                <label><input type="checkbox" value="Supplement Stalls" onChange={handleCheckboxChange} /> Supplement Stalls</label>
              </div>
            </div>
          )}

          {eventType === 'salon' && (
            <div className="checkboxGroup">
              <label>Featured Salon Activities:</label>
              <div>
                <label><input type="checkbox" value="Bridal Makeup Demos" onChange={handleCheckboxChange} /> Bridal Makeup Demos</label>
                <label><input type="checkbox" value="Hair Styling Contests" onChange={handleCheckboxChange} /> Hair Styling Contests</label>
                <label><input type="checkbox" value="Product Sampling" onChange={handleCheckboxChange} /> Product Sampling</label>
                <label><input type="checkbox" value="Beauty Consultations" onChange={handleCheckboxChange} /> Beauty Consultations</label>
              </div>
            </div>
          )}

          <div className="inputGroup">
            <label>Upload Event Poster</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </div>

          <button type="submit" className="submitBtn">Submit Proposal</button>
        </form>
      </div>
    </div>
  );
};

export default EventManagement;
