"use client"

import { useState } from "react";
import type { Plant } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Droplets, Sun, Thermometer, Wind, Calendar, BarChart3, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import PlantChatbot from "./plant-chatbot";

// Mock data for plants
const plants: Plant[] = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    species: "Monstera deliciosa",
    purchaseDate: "2023-01-15",
    lastWatered: "2023-04-10",
    wateringSchedule: 7,
    lastFertilized: "2023-03-20",
    fertilizingSchedule: 30,
    light: "Bright indirect",
    humidity: "Medium to high",
    temperature: "65-85°F (18-29°C)",
    notes: "Growing new leaf, consider repotting next month",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function PlantDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(plants[0]);

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            placeholder="Search plants..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Plant
        </Button>
      </div>
    </div>
  );
}
