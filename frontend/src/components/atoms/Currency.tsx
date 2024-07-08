"use client";
import React, { useState } from "react";

const Currency: React.FC = () => {
    const [currencyValue, setCurrencyValue] = useState<number>(0);

    const updateCurrencyValue = () => {
        // Replace this with your logic to fetch the updated currency value
        const newCurrencyValue = Math.floor(Math.random() * 100); // Example value

        setCurrencyValue(newCurrencyValue);
    };

    setInterval(updateCurrencyValue, 1000); // Update every  second. simulating change from server

    return (
        <div>
            <span>
                <a className="text-5xl">{currencyValue}</a>
                <a className="font-hegemony text-4xl">V</a>
            </span>
        </div>
    );
};

export default Currency;
