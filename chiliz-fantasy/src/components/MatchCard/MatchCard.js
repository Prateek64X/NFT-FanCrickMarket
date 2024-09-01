// components/MatchCard.js
"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./MatchCard.css";

export default function MatchCard({ matchId, matchName, matchDate, team1, team2, team1Image, team2Image, timeRemaining }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Handle card click to navigate to TeamPage
  const handleClick = () => {
    // Build query string with match details
    const queryString = new URLSearchParams({
      matchId,
      matchName,
      matchDate,
      team1,
      team2,
      timeRemaining,
    }).toString();

    // Navigate to TeamPage with query parameters
    router.push(`/contests?${queryString}`); // Adjust path to match your actual routing
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-md transition-all duration-300 ease-in-out transform ${
        isActive ? "bg-[#323232]" : "bg-[#090909] hover:bg-[#1D1D1D] hover:scale-105"
      } relative hover:border-b-4 border-[#ED1B2F]`}
      onClick={handleClick} // Add click handler
    >
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">Match Name</div>
        <div className="text-xs text-gray-500">Date</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{matchName}</h3>
        <span className="text-m text-gray-300">{matchDate}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500">Team 1</div>
        <div className="text-xs text-gray-500">Team 2</div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg">{team1}</span>
        <span className="text-xs text-gray-400">VS</span>
        <span className="text-lg">{team2}</span>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Image src={team1Image} alt={team1} width={64} height={64} />
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">Closing In</span>
          <span className="text-lg font-semibold">{timeRemaining}</span>
        </div>
        <Image src={team2Image} alt={team2} width={64} height={64} />
      </div>
      <input type="hidden" id="MatchCardId" value={matchId} />
    </div>
  );
}
