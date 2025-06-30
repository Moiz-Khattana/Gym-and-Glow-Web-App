import React, { useState } from "react";
import Sidebar from "../Dashboard/Components/SideBar Section/Sidebar";
import "../../App.css";

const ReviewsManagement = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    { id: 1, user: "Ali Raza", rating: 5, comment: "Excellent service! I had a great experience.", date: "March 20, 2025" },
    { id: 2, user: "Ayesha Khan", rating: 4, comment: "Good service, but there's room for improvement.", date: "March 18, 2025" },
    { id: 3, user: "Bilal Ahmed", rating: 3, comment: "It was okay, nothing exceptional.", date: "March 15, 2025" },
    { id: 4, user: "Fatima Noor", rating: 5, comment: "Outstanding! I will definitely visit again.", date: "March 10, 2025" },
    { id: 5, user: "Usman Siddiqui", rating: 2, comment: "Not as good as I expected.", date: "March 8, 2025" },
    { id: 6, user: "Zainab Baloch", rating: 5, comment: "Amazing environment and excellent service!", date: "March 6, 2025" },
    { id: 7, user: "Hassan Javed", rating: 4, comment: "Nice place, but can be improved further.", date: "March 5, 2025" },
    { id: 8, user: "Sadia Malik", rating: 3, comment: "It was an average experience.", date: "March 2, 2025" },
    { id: 9, user: "Farhan Ali", rating: 5, comment: "Fantastic, everything was top-notch!", date: "February 28, 2025" },
    { id: 10, user: "Noor Hassan", rating: 4, comment: "Beautiful ambiance, but prices are a bit high.", date: "February 25, 2025" },
    { id: 11, user: "Hiba Saeed", rating: 5, comment: "Great service, timely delivery!", date: "February 22, 2025" },
    { id: 12, user: "Rizwan Qureshi", rating: 3, comment: "Good service but staff behavior could be better.", date: "February 18, 2025" },
    { id: 13, user: "Nimra Aftab", rating: 4, comment: "Had a good experience, will visit again.", date: "February 15, 2025" },
    { id: 14, user: "Tariq Mahmood", rating: 2, comment: "I was disappointed with the services.", date: "February 10, 2025" },
    { id: 15, user: "Sana Javed", rating: 5, comment: "Perfect! Even better than I expected.", date: "February 5, 2025" },
    { id: 16, user: "Waqas Sheikh", rating: 4, comment: "Good service, but needs some improvement.", date: "February 2, 2025" },
    { id: 17, user: "Laiba Tariq", rating: 5, comment: "Everything was amazing!", date: "January 28, 2025" },
    { id: 18, user: "Faisal Rafiq", rating: 3, comment: "Service was okay, but a few issues were there.", date: "January 25, 2025" },
    { id: 19, user: "Humaira Saif", rating: 4, comment: "Good services, but a bit expensive.", date: "January 20, 2025" },
    { id: 20, user: "Omer Farooq", rating: 5, comment: "Excellent! I highly recommend it.", date: "January 15, 2025" },
  ];

  const handleDoubleClick = (id) => {
    setSelectedReview(selectedReview === id ? null : id);
  };

  return (
    <div className="reviewsPage">
      <Sidebar />
      <div className="reviewsContainer">
        <h2 className="reviewsHeader">Reviews Management</h2>

        <div className="reviewsContent">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`reviewCard ${selectedReview === review.id ? "expanded" : ""}`}
              onDoubleClick={() => handleDoubleClick(review.id)}
            >
              <h3>{review.user}</h3>
              <p className="reviewDate">{review.date}</p>
              <div className="reviewRating">⭐ {review.rating} / 5</div>
              {selectedReview === review.id && <p className="reviewComment">"{review.comment}"</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsManagement;
