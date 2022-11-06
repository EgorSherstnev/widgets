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
    const [text, setText] = useState('');

    return (
        <div>
            <input />
            <Dropdown 
                label="Select a Language"
                selected={language}
                onSelectedChange={setLangeage}
                options={options} 
            />
        </div>
    );
};

export default Translate;