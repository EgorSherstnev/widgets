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
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
];

const Translate = () => {
    const [language, setLangeage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            
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