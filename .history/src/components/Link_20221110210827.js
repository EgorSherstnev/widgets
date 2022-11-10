import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        event.preventDefauls();
        window.history.pushState({}, '', href);
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>
};

export default Link;