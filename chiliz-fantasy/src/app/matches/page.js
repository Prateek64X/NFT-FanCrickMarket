"use client";

import { useState } from "react";
import { BiCricketBall } from "react-icons/bi";
import { IoIosFootball } from "react-icons/io";
import { FaBaseballBatBall } from "react-icons/fa6";
import { CiBasketball } from "react-icons/ci";

import Image from "next/image";
import MatchCard from "@/components/MatchCard/MatchCard";
import MatchCardPropsList from "@/components/MatchCard/MatchCardPropsList";
import "./page.css";

const tabs = [
  { name: "Cricket", icon: <BiCricketBall size={24} /> },
  { name: "Football", icon: <IoIosFootball size={24} /> },
  { name: "Kabaddi", icon: <FaBaseballBatBall size={24} /> },
  { name: "Basketball", icon: <CiBasketball size={24} /> },
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState("Cricket");

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <div className="relative">
        <div className="flex justify-around border-b border-gray-700 mb-8">
        {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`p-4 text-lg font-medium flex items-center justify-center space-x-2 transition-transform duration-300 w-full ${
                activeTab === tab.name ? "text-red-500 scale-110" : "hover:text-red-500"
              }`}
              onClick={() => setActiveTab(tab.name)}
              style={{ flex: 1 }}  // Make each button take up equal space
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
        <span
          className={`absolute bottom-0 left-0 w-full h-[4px] bg-[#ED1B2F] transition-all duration-300 ease-in-out`}
          style={{
            width: `calc(100% / ${tabs.length})`,
            transform: `translateX(${tabs.findIndex(tab => tab.name === activeTab) * 100}%)`,
          }}
        ></span>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured</h2>
        <div className="flex space-x-4">
          <Image src="/images/featured.png" alt="Featured Match" width={300} height={200} className="rounded-md shadow-lg" />
          {/* Add more featured cards if needed */}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MatchCardPropsList.propsList
            .filter(match => match.type === activeTab) // Filter matches based on the selected tab
            .map((match, index) => (
              <MatchCard key={match.matchId} {...match} /> // Use matchId as key for better uniqueness
            ))}
        </div>
      </section>
    </div>
  );
}
