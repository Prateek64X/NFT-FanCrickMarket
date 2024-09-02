"use client";

import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import { useSearchParams } from "next/navigation";
import PlayerCard from "@/components/PlayerCard/PlayerCard";
import PlayerCardPropsList from "@/components/PlayerCard/PlayerCardPropsList";
import MatchCardPropsList from "@/components/MatchCard/MatchCardPropsList";
import "./page.css";

export default function TeamPage() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const columns = 5;
  const cardWidth = 440;
  const cardHeight = 620;

  const layoutConfig = PlayerCardPropsList.propsList.map((_, index) => ({
    i: `card-${index}`,
    x: index % columns,
    y: Math.floor(index / columns),
    w: 1,
    h: 1
  }));

  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const matchName = searchParams.get("matchName");
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");
  
  const match = MatchCardPropsList.findByMatchId(matchId);
  const country1 = match?.country1.toLowerCase();
  const country2 = match?.country2.toLowerCase();

  const filteredPropsList = PlayerCardPropsList.propsList.filter(props => {
    const cardCountry = props.country.toLowerCase();
    return cardCountry === country1 || cardCountry === country2;
  });

  const handleSelectPlayer = (playerId) => {
    setSelectedPlayers((prevSelectedPlayers) => {
      if (prevSelectedPlayers.includes(playerId)) {
        const updatedSelection = prevSelectedPlayers.filter(id => id !== playerId);
        return updatedSelection;
      } else {
        const updatedSelection = [...prevSelectedPlayers, playerId];
        return updatedSelection;
      }
    });
  };
  
  const selectedCount = selectedPlayers.length;
  const maxPlayers = 4;

  return (
    <div className="team-page">
      <h1 className="page-title">3. Create Team</h1>
      <div className="team-container">
        <div className="grid-item-row-3">
          <div className="grid-item"><h3>Match Name</h3></div>
          <div className="grid-item"><h3>Team</h3></div>
          <div className="grid-item"><h3>Transaction</h3></div>
        </div>
        <div className="grid-item-row-3">
          <div className="grid-item"><span>{matchName} team</span></div>
          <div className="grid-item"><span>{team1} vs {team2}</span></div>
          <div className="grid-item">
            <button className="connect-button navbar-item">
                Complete Purchase
            </button>
          </div>
        </div>

        <div className="grid-item-row-3 grid-seperator">
          <div className="grid-item"><h3>Selected Players</h3></div>
          <div className="grid-item"><h3>Contest Name</h3></div>
          <div className="grid-item"><h3>Contest Pool</h3></div>
        </div>
        <div className="grid-item-row-3">
          <div className="grid-item text-gradient text-heading-24"><span>{`${selectedCount}/${maxPlayers}`}</span></div>
          <div className="grid-item"><span>Super Shot</span></div>
          <div className="grid-item"><span>$200000</span></div>
        </div>

        <section className="grid-seperator">
          <GridLayout
            className="grid-layout"
            layout={layoutConfig}
            cols={6}
            rowHeight={cardHeight / 1}
            width={5 * cardWidth}
            isDraggable={false}
          >
            {filteredPropsList.map((props, index) => (
              <div key={`card-${index}`} style={{ width: cardWidth, height: cardHeight }}>
                <PlayerCard 
                  {...props} 
                  matchId={matchId} 
                  onSelect={handleSelectPlayer} 
                  selected={selectedPlayers.includes(props.playerId)} // Check if the player is in the selectedPlayers array
                />
              </div>
            ))}

          </GridLayout>
        </section>
      </div>
    </div>
  );
}
