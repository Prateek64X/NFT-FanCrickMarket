'use client';

import "./ContestCard.css";
import { useRouter } from "next/navigation";
import React from 'react';

export default function ContestCard({
  contestId,
  prizePool,
  spotsRemaining,
  totalSpots,
  matchId,
  matchName,
  team1,
  team2,
}) {
  const router = useRouter();

  const handleEnterClick = () => {
    const queryString = new URLSearchParams({
      prizePool,
      matchId,
      matchName,
      team1,
      team2,
    }).toString();

    router.push(`/teams?${queryString}`);
  };

  return (
    <div className="contest-card" onClick={handleEnterClick} style={{ cursor: 'pointer' }}>
      <div className="prize-pool">
        <span className="label">Prize Pool</span>
        <span className="amount">{prizePool}</span>
      </div>
      <div className="spots-info">
        <span className="spots">{spotsRemaining} Spots / {totalSpots} Spots</span>
      </div>
      <button className="enter-button">
        Enter
      </button>
    </div>
  );
}
