import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './pages/context.tsx'
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ShopContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ShopContextProvider>
    
  </BrowserRouter>
);
