import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import ItemDetailsDisplay from "./ItemDetailsDisplay";

export default function ProductDetails() {

    const location = useLocation();
    const locationSelectedItem = location.state;
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleBackToItems = () => {
    setSelectedItem(null);
  };

    return (
       <div className="app-container">
      {selectedItem ? (
        <ItemDetails
          image={selectedItem?.image}
          name={selectedItem?.name}
          description={selectedItem?.description}
          onBack={handleBackToItems}
        />

      ) : (
        
        <div className="item-grid">
          <ItemDetailsDisplay
            image={locationSelectedItem?.image} // Replace with the actual logic to get the correct image
            name={locationSelectedItem?.name}
            description={locationSelectedItem?.description}
            onSelect={() => handleItemSelect(locationSelectedItem)}
          />
          
        </div>
      )}
    </div>
  );
}

    
/*
    return (
         <div className="app-container">
      {selectedItem ? (
        <ItemDetails
          image={selectedItem.image}
          name={selectedItem.name}
          description={selectedItem.description}
          onBack={handleBackToItems}
        />

        ) : (
          <div className="item-grid">
            {details.map((item, index) => (
              <ItemDetailsDisplay
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                onSelect={() => handleItemSelect(item)}
              />

              ))}
        </div>
      )}
    </div>
  );
    
}
*/