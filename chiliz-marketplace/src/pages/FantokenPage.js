'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import "../styles/pages/fantoken-page.css";

export default function FantokenPage() {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const subtitle = searchParams.get('subtitle');
    const rarity_value = searchParams.get('rarity_value');
    const rarity_type = searchParams.get('rarity_type');
    const skill = searchParams.get('skill');
    const country = searchParams.get('country');
    const price_lowest = searchParams.get('price_lowest');
    const listing_count = searchParams.get('listing_count');

    return (
        <div className="fantoken-page">
            <h1>{title} {subtitle}</h1>
            <p>Match Details - DD/MM/YY</p>
            <div className="fantoken-info">
                <div className="fantoken-stat">
                    <span>Lowest Bid</span>
                    <p>${price_lowest}</p>
                </div>
                <div className="fantoken-stat">
                    <span>Top Bid</span>
                    <p>${listing_count}</p>
                </div>
            </div>
            <button className="buy-button">Select And Buy</button>
        </div>
    );
}
