"use client";

import "./ContestCard.css";

export default function ContestCard({ contestType, prizePool, spotsRemaining, totalSpots }) {
  return (
    <div className="contest-card">
      <div className="prize-pool">
        <span className="label">Prize Pool</span>
        <span className="amount">{prizePool}</span>
      </div>
      <div className="spots-info">
        <span className="spots">{spotsRemaining} Spots / {totalSpots} Spots</span>
      </div>
      <button className="enter-button">Enter</button>
    </div>
  );
}
