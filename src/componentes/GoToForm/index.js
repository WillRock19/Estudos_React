import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default () => {
    return <span className="add-arc-button">
        <Link to="/add">Add an awesome Comic Book's Arc!</Link>
    </span>
}