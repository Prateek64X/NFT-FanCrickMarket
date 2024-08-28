// /src/pages/index.js
"use client";

import React from 'react';
import GridLayout from 'react-grid-layout';
import FantokenCard from "@/components/card/FantokenCard";
import FantokenCardPropsList from "@/components/card/FantokenCardPropsList";

import "../styles/pages/Marketplace.css";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


export default function Marketplace() {
  var columns = 5;
  const cardWidth = 440;
  const cardHeight = 620;

  const layoutConfig = FantokenCardPropsList.propsList.map((_, index) => ({
    i: `card-${index}`,
    x: index % columns,
    y: Math.floor(index / columns),
    w: 1,
    h: 1
  }));

  return (
    <main className="flex min-h-screen flex-col p-0">
      <div className="w-full flex flex-col">
        <div className="background-container">
          <div className="banner-container">
            <img className="banner" src="/assets/images/banner.jpg" alt="Banner" />
          </div>
          <GridLayout
            className="grid-layout"
            layout={layoutConfig}
            cols={6} // Number of columns
            rowHeight={cardHeight / 1} // Adjust to match the height
            width={5 * cardWidth} // Total width based on number of columns
            isDraggable={false} // Disable dragging
          >
            <div key="card-0" style={{ width: cardWidth, height: cardHeight }}>
              <FantokenCard 
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
            
            {FantokenCardPropsList.propsList.slice(1).map((props, index) => (
              <div key={`card-${index + 1}`} style={{ width: cardWidth, height: cardHeight }}>
                <FantokenCard {...props} />
              </div>
            ))}
          </GridLayout>
        </div>
      </div>
      <footer className="footer">
        <div className="gradient-line-top"></div>
        <p>&copy; 2024 Metaplex Team</p>
      </footer>
    </main>
  );
}
