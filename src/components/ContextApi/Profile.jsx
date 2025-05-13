
//  *****************************   Consume Context in Any Child Component  ********************************

// Profile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Profile = () => {
  // Step 5: Use useContext to access context data
  const { username, setUsername } = useContext(UserContext);

  return (
    <div>
      <h2>Hello, {username}!</h2>
      <button onClick={() => setUsername("John")}>Change Name</button>
    </div>
  );
};

export default Profile;