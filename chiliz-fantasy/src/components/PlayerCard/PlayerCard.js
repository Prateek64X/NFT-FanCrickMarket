'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { FaStar, FaTrophy, FaFlag } from 'react-icons/fa';
import "./PlayerCard.css";
import MatchCardPropsList from "@/components/MatchCard/MatchCardPropsList"; 

var rarity_highest = 2000;

function PlayerCard(props) {
    const {
        playerId,
        title,
        subtitle,
        img,
        rarity_value,
        skill,
        country,
        price_lowest,
        listing_count,
        matchId,
        onSelect,
        selected
    } = props;

    const router = useRouter();

    // Get rarity text from value
    const rarity_type = getRarityText(rarity_value);
    const gradientColors = getGradientColors(rarity_type);
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    // Check Image
    const imgCorrected = getCheckedImage(img);

    // Handle card click
    const handleClick = () => {
        if (onSelect) {
            onSelect(playerId);
        }
    };

    return (
        <div 
            className={`card ${selected ? 'selected' : ''}`} 
            onClick={handleClick}
        >
            <div className='card-header' style={{ backgroundImage: `url(/images/PlayerCards/${imgCorrected})` }}>
                <div className='rarity-info-header'>
                    <p className="rarity-text">Rarity</p>
                    <p className="gradient-p" style={gradientStyle}>{rarity_value}</p>
                </div>
            </div>
            <div className='card-title'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className='player-card-attributes'>
                <div className='player-card-item'>
                    <div className='player-card-attributes'>
                        <FaStar className='icon' size={24} />
                        <h3>Rarity</h3>
                    </div>
                    <div className='player-card-attributes'>
                        <span style={gradientStyle}>{rarity_type.toUpperCase()}</span>
                    </div>
                </div>
                <div className='player-card-item'>
                    <div className='player-card-attributes'>
                        <FaTrophy className='icon' size={24} />
                        <h3>Skill</h3>
                    </div>
                    <div className='player-card-attributes'>
                        <span>{skill}</span>
                    </div>
                </div>
                <div className='player-card-item'>
                    <div className='player-card-attributes'>
                        <FaFlag className='icon' size={24} />
                        <h3>Country</h3>
                    </div>
                    <div className='player-card-attributes'>
                        <span>{country}</span>
                    </div>
                </div>
            </div>
            <button className='card-button'>
                <div className='button-left'>
                    <h4>Starting At</h4>
                    <span>${price_lowest}</span>
                </div>
                <div className='button-right'>
                    <h4>Listings</h4>
                    <span>{listing_count}</span>
                </div>
            </button>
            <input type='hidden' id='playerId' value={playerId}></input>
        </div>
    );
}

function getRarityText(rarity_value) {
    const percentage = (rarity_value / rarity_highest) * 100;

    if (percentage > 90) {
        return 'legendary';
    } else if (percentage > 70) {
        return 'epic';
    } else if (percentage < 10) {
        return 'common';
    } else if (percentage > 25) {
        return 'cool';
    } else {
        return 'common';
    }
}

function getGradientColors(rarity) {
    switch (rarity.toLowerCase()) {
        case 'epic':
            return ['#B872FF', '#1E3FEF'];
        case 'legendary':
            return ['#EF6C22', '#D1C12A'];
        case 'common':
            return ['#15BA4D', '#10B835'];
        case 'cool':
            return ['#0D78B4', '#10AEB8'];
        default:
            return ['#CACACA', '#DEDEDE'];
    }
}

function getCheckedImage(img) {
    const validExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
    const isValid = validExtensions.some((ext) => img.toLowerCase().endsWith(ext));
    if (isValid) {
        return img;
    } else {
        console.error('Invalid image format! Please use a valid extension. Defaulting to .Png.');
        return img+".png";
    }
}

export default PlayerCard;
