import React, { useState } from 'react';
import { createCampaign } from '../utils/blockchain';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const CreateCampaign: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCampaign(name, description, goal);
      setName('');
      setDescription('');
      setGoal('');
      alert('Campaign created successfully!');
    } catch (error) {
      console.error('Failed to create campaign:', error);
      alert('Failed to create campaign. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Campaign Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="goal">Funding Goal (ETH)</Label>
        <Input
          id="goal"
          type="number"
          step="0.01"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Create Campaign</Button>
    </form>
  );
};

