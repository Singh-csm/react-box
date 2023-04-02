// CSS
import "../App.css"
  // React component
  import React, { useState } from 'react';
  
  const Postcard1 = (props) => {
    const { title, content } = props;
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    return (
      <div
        className={`postkabox${hovered ? ' hover-effect' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>{title}</h2>
        <h3>{content}</h3>
      </div>
    );
  };
  
  export default Postcard1;
  