"use client";

import { useRouter } from 'next/router';
import { useSearchParams } from "next/navigation";
import PlayerCard from "@/components/PlayerCard/PlayerCard";
import "./page.css";

export default function TeamPage() {
  const searchParams = useSearchParams();
  const prizePool = searchParams.get("prizePool");
  const matchId = searchParams.get("matchId");
  const matchName = searchParams.get("matchName");
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");
  
  return (
    <div className="team-page">
      <h1 className="page-title">3. Create Team</h1>
      <div className="team-container">
        <div className="grid-item-row">
          <div className="grid-item"><h3>Match Name</h3></div>
          <div className="grid-item"><h3>Team</h3></div>
        </div>
        <div className="grid-item-row">
          <div className="grid-item"><span>{matchName} team</span></div>
          <div className="grid-item"><span>{team1} vs {team2}</span></div>
        </div>

        <div className="grid-item-row grid-seperator">
          <div className="grid-item"><h3>Contest Name</h3></div>
          <div className="grid-item"><h3>Contest Pool</h3></div>
        </div>
        <div className="grid-item-row">
          <div className="grid-item"><span>Super Shot</span></div>
          <div className="grid-item"><span>$200000</span></div>
        </div>
          
        <section className="grid-seperator">
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <PlayerCard 
              title={"Virat"} 
              subtitle={"Kohli"}
              img={"viratkohli.png"}
              rarity_value={1950}
              skill={"Batsman"}
              country={"India"}
              price_lowest={"80"}
              listing_count={"10"} 
            />
          </div>
        </section>
      </div>
    </div>
  );
}
