"use client";
import React, { useState, useEffect } from "react";
import { socket, getCurrency } from "../../api";
interface CurrencyProps {
    playerClass: string;
    roomID: string;
}

const Currency: React.FC<CurrencyProps> = ({ playerClass, roomID }) => {
    const [currencyValue, setCurrencyValue] = useState<number>(0);

    useEffect(() => {
        // Call getCurrency when the component is mounted
        const fetchCurrency = async () => {
            try {
                const currency = await getCurrency(roomID, playerClass);
                setCurrencyValue(currency);
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();

        function onBalanceUpdated(player: string, newBalance: number) {
            if (player === playerClass) {
                console.log("Balance updated:", newBalance);
                setCurrencyValue(newBalance); // Update the currency value with the new balance
            }
        }

        socket.on("balanceUpdate", onBalanceUpdated); // Listen to balanceUpdated event
    }, [roomID, playerClass]);
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
