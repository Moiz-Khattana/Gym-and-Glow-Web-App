import React, { useState } from "react";
import Sidebar from "../Dashboard/Components/SideBar Section/Sidebar";
import "../../App.css";

const notificationsData = [
    { id: 1, title: "New Booking Request", message: "Ali Khan has booked an appointment with you.", time: "2m ago" },
    { id: 2, title: "Review Received", message: "Fatima Sheikh left a 5-star review on your business.", time: "10m ago" },
    { id: 3, title: "Payment Received", message: "Rs. 2,500 received from Hassan Ahmed.", time: "30m ago" },
    { id: 4, title: "New Message", message: "Usman Tariq sent you a message.", time: "45m ago" },
    { id: 5, title: "Profile Updated", message: "Your profile information was updated successfully.", time: "1h ago" },
    { id: 6, title: "Reminder", message: "Your appointment with Zara Malik is in 1 hour.", time: "2h ago" },
    { id: 7, title: "Security Alert", message: "Suspicious login detected from a new device.", time: "5h ago" },
    { id: 8, title: "Promotion", message: "Special offer: 20% discount on all bookings today!", time: "10h ago" },
    { id: 9, title: "System Update", message: "New features added to your dashboard.", time: "1 day ago" },
    { id: 10, title: "Subscription Expiry", message: "Your premium plan expires in 3 days.", time: "2 days ago" },
  ];
  
  const Notifications = () => {
    const [expandedId, setExpandedId] = useState(null);
  
    const handleDoubleClick = (id) => {
      setExpandedId(expandedId === id ? null : id);
    };
  
    return (
      <div className="notificationsPage">
        <Sidebar />
        <div className="notificationsContainer">
          <h2 className="notificationsHeader">Notifications</h2>
          <div className="notificationsList">
            {notificationsData.map((notification) => (
              <div 
                key={notification.id} 
                className={`notificationCard ${expandedId === notification.id ? "expanded" : ""}`}
                onDoubleClick={() => handleDoubleClick(notification.id)}
              >
                <h3>{notification.title}</h3>
                <p className="notificationTime">{notification.time}</p>
                {expandedId === notification.id && <p className="notificationMessage">{notification.message}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Notifications;