"use client";

import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import { useSearchParams } from "next/navigation";
import PlayerCard from "@/components/PlayerCard/PlayerCard";
import PlayerCardPropsList from "@/components/PlayerCard/PlayerCardPropsList";
import { TransactionButton, useReadContract, useActiveAccount } from "thirdweb/react";
import { createThirdwebClient, getContract, defineChain, toEther } from "thirdweb";
import { claimTo, getActiveClaimCondition, nextTokenIdToMint, getTotalClaimedSupply } from "thirdweb/extensions/erc721";
import { getClientId, getNFTContractAddress } from "@/util/getContractAddress";
import "./page.css";

export default function TeamPage() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();
  const matchId = searchParams.get("matchId");
  const matchName = searchParams.get("matchName");
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");

  // Thirdweb setup
  const client = createThirdwebClient({ clientId: getClientId() });
  const contract = getContract({
    client,
    chain: defineChain(88882), // Use the appropriate chain ID
    address: getNFTContractAddress(),
  });

  // Fetch NFT Metadata
  const { data: claimCondition, isLoading: isLoadingClaimCondition } = useReadContract(getActiveClaimCondition, {
    contract: contract,
  });

  const { data: totalNFTSupply, isLoading: isTotalSupplyLoading } = useReadContract(nextTokenIdToMint, {
    contract: contract,
  });

  const { data: claimedSupply, isLoading: isClaimedSupplyLoading } = useReadContract(getTotalClaimedSupply, {
    contract: contract,
  });
  
  const account = useActiveAccount();

  // Calculate NFT price based on quantity
  const getNFTPrice = (quantity) => {
    const total = quantity * parseInt(claimCondition?.pricePerToken.toString() || "0");
    return toEther(BigInt(total));
  };

  const handleSelectPlayer = (playerId) => {
    setSelectedPlayers((prevSelectedPlayers) => {
      if (prevSelectedPlayers.includes(playerId)) {
        return prevSelectedPlayers.filter(id => id !== playerId);
      } else {
        return [...prevSelectedPlayers, playerId];
      }
    });
  };

  // Update the button disabled state based on selected players
  useEffect(() => {
    const maxPlayers = 4;
    const selectedCount = selectedPlayers.length;
    setIsButtonDisabled(selectedCount < maxPlayers / 2); // Disable the button if selected players are less than half

    // Set the quantity based on the selected players
    setQuantity(selectedCount); // Set quantity to the number of selected players
  }, [selectedPlayers]);


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

  const filteredPropsList = PlayerCardPropsList.propsList.filter(props => {
    const cardCountry = props.country.toLowerCase();
    return cardCountry === team1.toLowerCase() || cardCountry === team2.toLowerCase();
  });

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
            {/* Transaction Button */}
            {claimCondition ? (
              <TransactionButton
                className={`transaction-button ${isButtonDisabled ? 'disabled' : 'active'}`}
                transaction={() => claimTo({
                  contract: contract,
                  to: account?.address || "", // Ensure the correct address is used
                  quantity: BigInt(quantity),
                })}
                onTransactionConfirmed={() => {
                  alert("NFT claimed!");
                  setQuantity(1); // Reset quantity after successful transaction
                }}
                disabled={isButtonDisabled || !account}
              >
                {`Claim NFT (${getNFTPrice(quantity)} ETH)`}
              </TransactionButton>
            ) : (
              <p>Loading claim condition...</p>
            )}
          </div>
        </div>

        <div className="grid-item-row-3 grid-seperator">
          <div className="grid-item"><h3>Selected Players</h3></div>
          <div className="grid-item"><h3>Contest Name</h3></div>
          <div className="grid-item"><h3>Contest Pool</h3></div>
        </div>
        <div className="grid-item-row-3">
          <div className="grid-item text-gradient text-heading-24"><span>{`${selectedPlayers.length}/4`}</span></div>
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
                  selected={selectedPlayers.includes(props.playerId)}
                />
              </div>
            ))}
          </GridLayout>
        </section>
      </div>
    </div>
  );
}