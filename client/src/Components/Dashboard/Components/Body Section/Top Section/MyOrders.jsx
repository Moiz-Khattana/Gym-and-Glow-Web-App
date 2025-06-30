import React, { useState } from 'react';
import Sidebar from '../../SideBar Section/Sidebar';

const initialBookings = [
  {
    user: 'Zara Ahmed',
    service: 'Salon Hair Spa',
    location: 'Lahore',
    time: '3:00 PM',
    date: 'April 12, 2025',
    status: 'Pending',
  },
  {
    user: 'Ali Raza',
    service: 'Gold Gym Membership',
    location: 'Gujrat',
    time: '12:00 PM',
    date: 'April 14, 2025',
    status: 'Pending',
  },
  {
    user: 'Fatima Noor',
    service: 'Facial & Skin Care',
    location: 'Karachi',
    time: '2:30 PM',
    date: 'April 13, 2025',
    status: 'Pending',
  },
  {
    user: 'Usman Khalid',
    service: 'Platinum Gym Package',
    location: 'Islamabad',
    time: '4:00 PM',
    date: 'April 15, 2025',
    status: 'Pending',
  },
  {
    user: 'Hina Sheikh',
    service: 'Bridal Makeup',
    location: 'Multan',
    time: '11:00 AM',
    date: 'April 16, 2025',
    status: 'Pending',
  },
  {
    user: 'Ahmed Bashir',
    service: 'Personal Trainer (Gym)',
    location: 'Rawalpindi',
    time: '5:30 PM',
    date: 'April 17, 2025',
    status: 'Pending',
  }
];

const MyOrders = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleAllocate = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].status = 'Allocated';
    setBookings(updatedBookings);
  };

  const handleReject = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].status = 'Rejected';
    setBookings(updatedBookings);
  };

  const getStatusClass = (status) => {
    if (status === 'Allocated') return 'status green';
    if (status === 'Rejected') return 'status red';
    return 'status';
  };

  return (
    <div className="myOrdersPage">
      <Sidebar />
      <div className="ordersContainer">
        <h2 className="pageTitle">Subscription Requests</h2>
        <div className="ordersGrid">
          {bookings.map((booking, index) => (
            <div className="orderCard" key={index}>
              <div className="orderInfo">
                <h3>{booking.user}</h3>
                <p><strong>Service:</strong> {booking.service}</p>
                <p><strong>Location:</strong> {booking.location}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>
              </div>
              <div className="orderActions">
                <p className={getStatusClass(booking.status)}>
                  <strong>Status:</strong> {booking.status}
                </p>
                <div className="buttonRow">
                  <button className="btn accept" onClick={() => handleAllocate(index)}>Allocate Slot</button>
                  <button className="btn reject transparent" onClick={() => handleReject(index)}>Reject</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
