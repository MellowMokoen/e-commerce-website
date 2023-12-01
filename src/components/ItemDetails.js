import React from "react";

const ItemDetails = ({ image, name, description, onBack }) => (
    
    <div className="item-details">
     <h2>{image}</h2>
     <h3>{name}</h3>
     <p>{description}</p>
        
        <button className="back-to-menu-button" onClick={onBack}>
          Back to Items
       </button>
    </div>

    );
    
    export default ItemDetails; 