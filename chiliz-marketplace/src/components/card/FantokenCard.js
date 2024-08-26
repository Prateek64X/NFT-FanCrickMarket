import React from 'react';
import { FaStar, FaTrophy, FaFlag } from 'react-icons/fa';
import "../../styles/components/fantoken-card.css";

var rarity_highest = 2000;

function FantokenCard(props) {
    const {
      title,
      subtitle,
      rarity_value,
      skill,
      country,
      price_lowest,
      listing_count
    } = props;

    // Get rarity text from value
    var rarity_type = getRarityText(rarity_value)
    const gradientColors = getGradientColors(rarity_type);
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };
    
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='rarity-info-header'>
                    <p>Rarity</p>
                    <p style={gradientStyle}>{rarity_value}</p>
                </div>
            </div>
            <div className='card-title'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className='card-grid'>
                <div className='grid-item'>
                    <div className='grid-item-row'>
                        <FaStar className='icon' size={24} />
                        <h3>Rarity</h3>
                    </div>
                    <div className='grid-item-row'>
                        <span style={gradientStyle}>{rarity_type.toUpperCase()}</span>
                    </div>
                </div>
                <div className='grid-item'>
                    <div className='grid-item-row'>
                        <FaTrophy className='icon' size={24} />
                        <h3>Skill</h3>
                    </div>
                    <div className='grid-item-row'>
                        <span>{skill}</span>
                    </div>
                </div>
                <div className='grid-item'>
                    <div className='grid-item-row'>
                        <FaFlag className='icon' size={24} />
                        <h3>Country</h3>
                    </div>
                    <div className='grid-item-row'>
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

export default FantokenCard;
