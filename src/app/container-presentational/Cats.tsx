"use client"
import React, { useEffect } from 'react';
import CatsUI from './CatsUI';

const fetchCats = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data;
}

const Cats = () => {
    const [cats, setCats] = React.useState(null);
    useEffect(() => {
        fetchCats().then((data) => setCats(data));
    }, []);
    return (
       <CatsUI cats={cats} />
    );
};

export default Cats;