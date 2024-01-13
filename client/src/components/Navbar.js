import React, { useState } from 'react';

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <nav className="navbar">
            <div className="select-container">
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
