import React from "react";

const onTitleClick = (index) => {
    console.log('Title clicked', index);
};

const Accordion = ({ items }) => {
    const renderedItems = items.map((item, index) => {
        return (
            <div key={item.title}>
                <div 
                    className="title active"
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </div>
        )
    }); 

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;