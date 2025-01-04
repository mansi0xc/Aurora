import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../utils/blockchain';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Campaign {
  id: string;
  name: string;
  description: string;
  goal: string;
  raised: string;
}

export const CampaignList: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const fetchedCampaigns = await getCampaigns();
      setCampaigns(fetchedCampaigns);
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader>
            <CardTitle>{campaign.name}</CardTitle>
            <CardDescription>{campaign.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Goal: {campaign.goal} ETH</p>
            <p>Raised: {campaign.raised} ETH</p>
            <Button className="mt-2">Contribute</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

