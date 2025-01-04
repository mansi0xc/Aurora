import { ethers } from 'ethers';

// This should be replaced with your actual contract ABI and address
const contractABI = [];
const contractAddress = "0x...";

let provider: ethers.providers.Web3Provider;
let signer: ethers.Signer;
let contract: ethers.Contract;

export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
      return true;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return false;
    }
  } else {
    console.error("Metamask is not installed");
    return false;
  }
};

export const createCampaign = async (name: string, description: string, goal: string) => {
  if (!contract) throw new Error("Wallet not connected");
  // Replace this with actual contract interaction
  console.log("Creating campaign:", { name, description, goal });
  // const tx = await contract.createCampaign(name, description, ethers.utils.parseEther(goal));
  // await tx.wait();
};

export const getCampaigns = async () => {
  if (!contract) throw new Error("Wallet not connected");
  // Replace this with actual contract interaction
  // const campaigns = await contract.getCampaigns();
  // return campaigns;
  return [
    { id: '1', name: 'Campaign 1', description: 'Description 1', goal: '1', raised: '0.5' },
    { id: '2', name: 'Campaign 2', description: 'Description 2', goal: '2', raised: '1.5' },
  ];
};

export const contribute = async (campaignId: string, amount: string) => {
  if (!contract) throw new Error("Wallet not connected");
  // Replace this with actual contract interaction
  console.log("Contributing to campaign:", { campaignId, amount });
  // const tx = await contract.contribute(campaignId, { value: ethers.utils.parseEther(amount) });
  // await tx.wait();
};

