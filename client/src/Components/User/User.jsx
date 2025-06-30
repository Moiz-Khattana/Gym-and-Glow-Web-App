import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../App.css"; // Ensuring styling consistency
import Sidebar from "../Dashboard/Components/SideBar Section/Sidebar"; // Import Sidebar

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch user data (replace with real API call)
    setUsers([
      { id: 1, name: "John Doe", role: "User", status: "Active" },
      { id: 2, name: "Jane Smith", role: "Service Provider", status: "Inactive" },
      { id: 3, name: "Admin User", role: "Admin", status: "Active" },
    ]);
  }, []);

  const toggleStatus = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user));
  };

  return (
    <div className="dashboard">
      {/* Sidebar now includes a navigation function */}
      <Sidebar onDashboardClick={() => navigate("/dashboard")} />

      <div className="dashboardContainer">
        <h2 className="pageTitle">User Management</h2>

        <div className="tableContainer">
          <table className="userTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td className={user.status === "Active" ? "statusActive" : "statusInactive"}>
                    {user.status}
                  </td>
                  <td>
                    <button className="statusBtn" onClick={() => toggleStatus(user.id)}>
                      {user.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
