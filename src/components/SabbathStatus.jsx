import React, { useState, useEffect } from 'react';
import '../styles/SabbathStatus.css'; 
const SabbathStatus = () => {
    const [status, setStatus] = useState("Loading Sabbath times...");
    const [isSabbath, setIsSabbath] = useState(false);
  
    const CHURCH_LAT = 32.5093; 
    const CHURCH_LNG = -92.1193;

    useEffect(() => {
        const fetchSabbathData = async () => {
            try {
                const today = new Date();
                const dayOfWeek = today.getDay(); 

                const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${CHURCH_LAT}&lng=${CHURCH_LNG}&formatted=0`);
                const data = await res.json();
                const todaySunset = new Date(data.results.sunset);

                if (dayOfWeek === 5) { // Friday
                    if (today < todaySunset) {
                        setStatus(`Sabbath begins today at ${todaySunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
                        setIsSabbath(false);
                    } else {
                        setStatus("Happy Sabbath! The sun has set.");
                        setIsSabbath(true);
                    }
                } else if (dayOfWeek === 6) { // Saturday
                    if (today < todaySunset) {
                        setStatus("Happy Sabbath! Join us for worship today.");
                        setIsSabbath(true);
                    } else {
                        setStatus("Sabbath has ended. Have a blessed week!");
                        setIsSabbath(false);
                    }
                } else {
                    setStatus("Join us this coming Saturday for Sabbath worship.");
                    setIsSabbath(false);
                }
            } catch (error) {
                setStatus("Welcome to our Sabbath-keeping community.");
            }
        };

        fetchSabbathData();
    }, []);

    return (
        <div className={`sabbath-banner ${isSabbath ? 'sabbath-active' : ''}`}>
            <p className="sabbath-text">{status}</p>
        </div>
    );
};

export default SabbathStatus;