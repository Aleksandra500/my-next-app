'use client';

import { useEffect, useState } from "react";


export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(() => {
        setTime(newDate().toLocaleTimeString())},1000)

        return () => clearInterval(timer)
    },[])

    return (
        <h2>Trenutno vreme: {time}</h2>
    )
} 