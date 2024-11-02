// History.js
import React from 'react';
import NavBar from './navbar';
import { useHistory } from '../util/weatherContext'; // Correct import path

export default function History() {
    const { history } = useHistory(); // Use the context

    return (
        <div>
            <NavBar />
            <h3>Search History</h3>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        {item.location.name} - {item.current.temp_c}°C - {item.current.condition.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
