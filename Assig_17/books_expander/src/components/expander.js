import React, { useState } from "react";


const Component = ({ title,content,short}) => {
   
    const [showMore, setShowMore] = useState(true);
    const More = () => { setShowMore(!showMore); }
    return (
        <div>
            <h4>{title}</h4>
            <p>
                {showMore ? content.slice(0,short) : content}
                <span>
                  <a href="#" onClick={More}>  {showMore ? ".....show more" : " show less"} </a>
                </span>
            </p>
        </div>
    );
};
export default Component;