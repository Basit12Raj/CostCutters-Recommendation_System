import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/admin/data');
        if (response.ok) {
          const data = await response.json();
          setSubmittedData(data);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {submittedData.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name}, <strong>Email:</strong> {item.email}, <strong>Message:</strong> {item.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
