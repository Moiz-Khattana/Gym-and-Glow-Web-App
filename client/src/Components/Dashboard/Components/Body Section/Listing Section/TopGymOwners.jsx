import React from 'react';
import Sidebar from '../../SideBar Section/Sidebar'; // Keep your constant sidebar

const owners = [
  {
    name: 'Ali Raza',
    gym: 'Iron Temple Gym',
    location: 'Gujrat',
    members: 350,
    rating: 4.9,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Sara Khan',
    gym: 'Fitness Powerhouse',
    location: 'Lahore',
    members: 290,
    rating: 4.7,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Hassan Ali',
    gym: 'Beast Mode Gym',
    location: 'Karachi',
    members: 410,
    rating: 5.0,
    image: 'https://via.placeholder.com/80'
  }
];

const TopGymOwners = () => {
  return (
    <div className="topGymOwnersPage">
      <Sidebar />
      <div className="ownersContainer">
        <h2 className="pageTitle">Top Gym Owners</h2>
        <div className="ownersGrid">
          {owners.map((owner, index) => (
            <div className="ownerCard" key={index}>
              <img src={owner.image} alt="Owner" className="ownerImg" />
              <div className="ownerInfo">
                <h3>{owner.name}</h3>
                <p><strong>Gym:</strong> {owner.gym}</p>
                <p><strong>Location:</strong> {owner.location}</p>
                <p><strong>Members:</strong> {owner.members}</p>
                <p><strong>Rating:</strong> ⭐ {owner.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGymOwners;
