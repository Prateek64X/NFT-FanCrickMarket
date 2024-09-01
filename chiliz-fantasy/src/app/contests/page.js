"use client";

import { useRouter } from 'next/router';
import { useSearchParams } from "next/navigation";
import ContestCard from "@/components/ContestCard/ContestCard";
import "./page.css";

export default function TeamPage() {
  const searchParams = useSearchParams();
  const timeRemaining = searchParams.get("timeRemaining");
  const matchId = searchParams.get("matchName");
  const matchName = searchParams.get("matchName");
  const matchDate = searchParams.get("matchDate");
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");

  return (
    <div className="contests-page">
      <h1 className="page-title">2. Contests</h1>
      <div className="contests-container">
        <div className="grid-item-row">
          <div className="grid-item"><h3>Match Name</h3></div>
          <div className="grid-item"><h3>Date</h3></div>
        </div>
        <div className="grid-item-row">
          <div className="grid-item"><span>{matchName} Contests</span></div>
          <div className="grid-item"><span>{matchDate}</span></div>
        </div>

        <div className="grid-item-row grid-seperator">
          <div className="grid-item"><h3>Teams</h3></div>
          <div className="grid-item"><h3>Remaining Time</h3></div>
        </div>
        <div className="grid-item-row">
          <div className="grid-item"><span>{team1} vs {team2}</span></div>
          <div className="grid-item"><span>{timeRemaining}</span></div>
        </div>
          
        <section className="grid-seperator">
          <h2 className="section-title">Super Shot Contests</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <ContestCard contestId="CI0001" prizePool="$200000" spotsRemaining={500} totalSpots={2000} contestType="Super Shot" matchId={matchId} matchName={matchName} team1={team1} team2={team2} />
          </div>
        </section>

        <section className="runner-up-section">
          <h2 className="section-title">Runner Up Contests</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <ContestCard contestId="CI0002" prizePool="$5000" spotsRemaining={65} totalSpots={850} matchId={matchId} matchName={matchName} team1={team1} team2={team2}/>
            <ContestCard contestId="CI0003" prizePool="$3500" spotsRemaining={120} totalSpots={500} matchId={matchId} matchName={matchName} team1={team1} team2={team2}/>
          </div>
        </section>
      </div>
    </div>
  );
}
