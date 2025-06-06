
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './ThemeContext';

// Function to mount the application with error handling
const mountApp = () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("Root element not found. Cannot mount React application.");
    return;
  }

  try {
    window.React = React; // Make React available globally to help with potential issues
    
    // Create root with strict typing
    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
  
      </React.StrictMode>
    );
    
    console.log("React application successfully mounted");
  } catch (error) {
    console.error("Failed to render React application:", error);
    // Fallback UI if React rendering fails
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h2>Something went wrong</h2>
          <p>The application couldn't load properly. Please try refreshing the page.</p>
          <button onclick="window.location.reload()">Refresh</button>
        </div>
      `;
    }
  }
};

// Execute when DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp);
} else {
  mountApp();
}
