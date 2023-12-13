import React, { useState } from "react";
import "../styles/MenuSidebar.css";
import image1 from "../images/Type=Transparent.png";
import image2 from "../images/Name=menu.png";
import image3 from "../images/Name=storefront.png";
import image4 from "../images/Name=bag-handle.png"
import image5 from "../images/Name=log-out.png";

// MenuSidebar component displays a sidebar with menu items
export default function MenuSidebar() {
  // State to manage the open/closed state of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Array of menu items with images and alt text
  const menuItems = [
    { image: image1, alt: "logo" },
    { image: image2, alt: "menu" },
    { image: image3, alt: "storefront" },
    { image: image4, alt: "bag-handle" },
    { image: image5, alt: "log-out" },
  ];

  // Function to toggle the open/closed state of the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to open the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    // Container for the menu sidebar with dynamic class based on sidebar state
    <div className={`menu-container ${isSidebarOpen ? "open" : "closed"}`}>
      {/* Close button to toggle the sidebar */}
      <button className="close-button" onClick={toggleSidebar}>
        Close
      </button>

      {/* Map through menu items to display them in the sidebar */}
      {menuItems.map((item, index) => (
        <div className="menu-sidebar" key={index}>
          <img src={item.image} alt={item.alt} />
        </div>
      ))}

      {/* Open button displayed when the sidebar is closed */}
      {!isSidebarOpen && (
        <button className="open-button" onClick={openSidebar}>
          Open
        </button>
      )}
    </div>
  );
}
