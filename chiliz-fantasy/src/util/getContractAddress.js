// /src/util/getContractAddress.js
export const getClientId = () => {
    return process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID ?? "";
  };
  
  export const getNFTContractAddress = () => {
    return process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS ?? "";
  };
  