"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ConnectButton, TransactionButton, useReadContract, useActiveAccount } from "thirdweb/react";
import { createThirdwebClient, getContract, defineChain, toEther } from "thirdweb";
import { claimTo, getActiveClaimCondition, nextTokenIdToMint, getTotalClaimedSupply } from "thirdweb/extensions/erc721";
import { getClientId, getNFTContractAddress } from "@/util/getContractAddress";
import "../../styles/pages/fantoken-page.css";

export default function FantokenPage() {
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const subtitle = searchParams.get('subtitle');
    const img = searchParams.get('img');
    const price_lowest = searchParams.get('price_lowest');
    const listing_count = searchParams.get('listing_count');

    // Initialize Thirdweb client and contract
    const client = createThirdwebClient({ clientId: getClientId() });
    const contract = getContract({
        client,
        chain: defineChain(88882),
        address: getNFTContractAddress(),
    });

    // Fetch contract data
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

    const getNFTPrice = (quantity) => {
        const total = quantity * parseInt(claimCondition?.pricePerToken.toString() || "0");
        return toEther(BigInt(total));
    };

    useEffect(() => {
        // Enable the button if claim condition is loaded
        setIsButtonDisabled(!claimCondition);
    }, [claimCondition]);

    return (
        <div className='main'>
            <div className='fantoken-page'>
                <div className="fantoken-content">
                    <div className="image-container">
                        <Image
                            src={`/assets/images/PlayerCards/${img}`}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="info-container">
                        <h1>{title} {subtitle}</h1>
                        <p>Match Details - India VS Sri Lanka | 22 April 22</p>
                        <div className="fantoken-info">
                            <div className="fantoken-stat low-bid">
                                <span>Lowest Bid</span>
                                <p>${price_lowest}</p>
                            </div>
                            <div className="fantoken-stat high-bid">
                                <span>Top Bid</span>
                                <p>${price_lowest * 3.59}</p>
                            </div>
                        </div>
                        
                        <div className="fantoken-stat-footer">
                            <span>Listings</span>
                            <p>{listing_count}</p>
                        </div>

                        {/* Connect Button */}
                        <ConnectButton />

                        {/* Transaction Button */}
                        {claimCondition ? (
                            <TransactionButton
                                className={`transaction-button ${isButtonDisabled ? 'disabled' : 'active'}`}
                                transaction={() => claimTo({
                                    contract: contract,
                                    to: account?.address || "", // User's address
                                    quantity: BigInt(quantity),
                                })}
                                onTransactionConfirmed={() => {
                                    setQuantity(1);
                                    alert("NFT claimed!");
                                }}
                                disabled={isButtonDisabled || !account} // Disable if not logged in or conditions not met
                            >
                                {`Claim NFT (${getNFTPrice(quantity)} ETH)`}
                            </TransactionButton>
                        ) : (
                            <p>Loading claim condition...</p>
                        )}

                        {/* Quantity Selector */}
                        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuantitySelector({ quantity, setQuantity }) {
    return (
        <div className="flex items-center mt-4">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 bg-[#3a3a3a] text-white rounded-md hover:bg-[#5a5a5a]">
                -
            </button>
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="mx-2 p-2 border-gray-600 bg-[#4e4e4e] rounded-md"
                min={1}
            />
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-[#3a3a3a] text-white rounded-md hover:bg-[#5a5a5a]">
                +
            </button>
        </div>
    );
}
