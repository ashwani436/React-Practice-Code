//  **************************Create the Context and Provider **************************************** //
// UserContext.js
import { createContext, useState } from 'react';

// Step 1: Create a context object
export const UserContext = createContext();

// Step 2: Create a provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("Ashwani");

  console.log('data', children)

  return (
    // Step 3: Wrap children in the Provider and pass value
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};