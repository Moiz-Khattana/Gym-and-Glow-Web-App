import React from 'react';
import Sidebar from '../../SideBar Section/Sidebar'; // Keep your constant sidebar

const salonOwners = [
  {
    name: 'Ayesha Malik',
    salon: 'Glow & Go Salon',
    location: 'Lahore',
    clients: 320,
    rating: 4.8,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Mehwish Ahmed',
    salon: 'Style Studio',
    location: 'Islamabad',
    clients: 280,
    rating: 4.7,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Fatima Noor',
    salon: 'Elegance Beauty Bar',
    location: 'Karachi',
    clients: 400,
    rating: 5.0,
    image: 'https://via.placeholder.com/80'
  }
];

const TopSalonOwners = () => {
  return (
    <div className="topGymOwnersPage">
      <Sidebar />
      <div className="ownersContainer">
        <h2 className="pageTitle">Top Salon Owners</h2>
        <div className="ownersGrid">
          {salonOwners.map((owner, index) => (
            <div className="ownerCard" key={index}>
              <img src={owner.image} alt="Owner" className="ownerImg" />
              <div className="ownerInfo">
                <h3>{owner.name}</h3>
                <p><strong>Salon:</strong> {owner.salon}</p>
                <p><strong>Location:</strong> {owner.location}</p>
                <p><strong>Clients:</strong> {owner.clients}</p>
                <p><strong>Rating:</strong> ⭐ {owner.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSalonOwners;
