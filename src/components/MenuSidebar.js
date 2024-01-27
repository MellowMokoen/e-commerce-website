import "../styles/MenuSidebar.css";
import image1 from "../images/Type=Transparent.png";
import image2 from "../images/Name=menu.png";
import image3 from "../images/Name=storefront.png";
import image4 from "../images/Name=bag-handle.png";
import image5 from "../images/Name=log-out.png";

export default function MenuSidebar() {
  // Array of menu items with images and alt text
  const menuItems = [
    { image: image1, alt: "logo" },
    { image: image2, alt: "menu" },
    { image: image3, alt: "storefront" },
    { image: image4, alt: "bag-handle" },
    { image: image5, alt: "log-out" },
  ];

  return (
    // Container for the menu sidebar with dynamic class based on sidebar state
    <div className={`menu-container`}>
      {/* Map through menu items to display them in the sidebar */}
      {menuItems.map((item, index) => (
        <div className="menu-sidebar" key={index}>
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
