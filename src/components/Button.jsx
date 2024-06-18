import React from 'react';
function Button({ children, onClick }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;