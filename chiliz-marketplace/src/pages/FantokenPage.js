'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import "../styles/pages/fantoken-page.css";

export default function FantokenPage() {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const subtitle = searchParams.get('subtitle');
    const img = searchParams.get('img');
    const rarity_value = searchParams.get('rarity_value');
    const rarity_type = searchParams.get('rarity_type');
    const skill = searchParams.get('skill');
    const country = searchParams.get('country');
    const price_lowest = searchParams.get('price_lowest');
    const listing_count = searchParams.get('listing_count');

    return (
        <div className='main'>
            <Navbar />
            <div className='fantoken-page'>
                <div className="fantoken-content">
                    <div className="image-container">
                        <Image
                            src={`/assets/images/PlayerCards/${img}`}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="info-container">
                        <h1>{title} {subtitle}</h1>
                        <p>Match Details - India VS Sri Lanka | 22 April 22</p>
                        <div className="fantoken-info">
                            <div className="fantoken-stat low-bid">
                                <span>Lowest Bid</span>
                                <p>${price_lowest}</p>
                            </div>
                            <div className="fantoken-stat high-bid">
                                <span>Top Bid</span>
                                <p>${price_lowest*3.59}</p>
                            </div>
                        </div>
                        
                        <div className="fantoken-stat-footer">
                            <span>Listings</span>
                            <p>${listing_count}</p>
                        </div>
                        <button className="buy-button">Select And Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
