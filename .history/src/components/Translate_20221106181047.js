import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Africaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
    {
        label: 'Russian',
        value: 'ru',
    },
    {
        label: 'Dutch',
        value: 'nl',
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
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert />
        </div>
    );
};

export default Translate;