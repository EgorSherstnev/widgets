import React, { useState } from "react";

const Accordion = ({ items }) => {
    const[activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        return (
            <div key={item.title}>
                <div 
                    className="title "
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content ">
                    <p>{item.content}</p>
                </div>
            </div>
        )
    }); 

    return <div className="ui styled accordion">
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>
};

export default Accordion;