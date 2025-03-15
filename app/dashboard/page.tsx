import type { Metadata } from "next"
import DashboardSidebar from "./dashboard-sidebar"
import PlantDashboard from "./plant-dashboard"

export const metadata: Metadata = {
  title: "Plant Care Dashboard | BloomNest",
  description: "Track your plants, get care reminders, and chat with our AI plant expert.",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-green-800 dark:text-green-300">Plant Care Dashboard</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <DashboardSidebar />
        </div>
        <div className="lg:w-3/4">
          <PlantDashboard />
        </div>
      </div>
    </div>
  )
}

