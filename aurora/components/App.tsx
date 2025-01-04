import React, { useState } from 'react';
import { CampaignList } from './components/CampaignList';
import { CreateCampaign } from './components/CreateCampaign';
import { connectWallet } from './utils/blockchain';
import { Button } from "@/components/ui/button"

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    const connected = await connectWallet();
    setIsConnected(connected);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blockchain Crowdfunding</h1>
      {!isConnected ? (
        <Button onClick={handleConnect}>Connect Wallet</Button>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-2">Create a New Campaign</h2>
          <CreateCampaign />
          <h2 className="text-2xl font-semibold my-4">Active Campaigns</h2>
          <CampaignList />
        </>
      )}
    </div>
  );
};

export default App;

