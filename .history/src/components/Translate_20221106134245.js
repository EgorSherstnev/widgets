import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
    {
        label: 'Africaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
];

const Translate = () => {
    const [language, setLangeage] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                selected={language}
                onSelectedChange={setLangeage}
                options={options} 
            />
        </div>
    );
};

export default Translate;