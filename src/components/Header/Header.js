import React from 'react';

const Header = () => {
    const headerStyle = {
        border: '1px solid lightgray',
    };
    return (
        <div style={headerStyle}>
            <h1>This is header</h1>
            <p>EPL Header Image will be here</p>
        </div>
    );
};

export default Header;