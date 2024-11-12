import React from 'react';                 
import ReactDOM from 'react-dom/client';                      
import App from './App';                   
import reportWebVitals from './reportWebVitals';  


const root = ReactDOM.createRoot(document.getElementById('root'));  // Root DOM element in index.html
root.render(
  <React.StrictMode>   {/* StrictMode helps with highlighting potential issues */}
    <App />            {/* Render the main App component */}
  </React.StrictMode>
);


reportWebVitals();
