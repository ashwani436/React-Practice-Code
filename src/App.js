import { useState, React } from "react";
import PreventRerendring from "./components/PreventRendering/PreventRerendring";
import ContextParent from "./components/ContextApi/ContextParent";
import ComponentHasError from "./components/ErrorBoundry/ComponentHasError";
import ErrorBoundary from "./components/ErrorBoundry/ErrorBoundry";
import TempParent from "./components/UseMemoExample/TempConvertor";
import Form from "./components/Form";
import withLoading from "./components/Higherorder/withAuth";
import DisplayData from "./components/Higherorder/Dashboard";
import React from 'react';
import withAuth from "./components/Higherorder/withAuth";
import Dashboard from "./components/Higherorder/Dashboard";
import Login from './Login'; // create this component as needed
import Todo from "./components/TodoApp/Todo";
import axiosClient from "./components/Interceptors/interceptor";

const ProtectedDashboard = withAuth(Dashboard);


// ****************************************INTERCEPTOR *******************************************************************//

const product = await axiosClient.get('/products/123');

//We use the withAuth HOC to protect routes or components by checking if a user is authenticated before rendering them.
// Reusable Login Logic Instead of writing auth checks in every component, we use withAuth() once and wrap any component we want to protect.


function App() {
  
  return (
    <div>
      {/*************************** How to Prevent Re-Rendering using memo=>React.memo() is a Higher Order Component (HOC) that helps optimize
                                    performance by preventing unnecessary re-renders of functional components.
                                    It remembers the previous props and will only re-render the component if the props have actually changed.  ***************************/}

                                    
      

      {/* <PreventRerendring/> */}
  
      
      {/*********************************** Context API ************/}
      {/* <ContextParent/> */}
      
      {/* ******************************** ERROR BOUNDRY*******************************************/}
      {/* <ErrorBoundary>
        <ComponentHasError />
        </ErrorBoundary> */}
      
      
      {/* HOC */}
      {/* <h1>Higher Order Component</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedDashboard />} />
        </Routes>
      </BrowserRouter> */}
      <Todo/>

    
      {/* <Form /> */}
    </div>
  );
}



export default App;