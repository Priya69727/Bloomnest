"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, PlusCircle, Calendar, MessageSquare, Settings, HelpCircle, Bell, Droplets, Sprout } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "My Plants",
    href: "/dashboard/plants",
    icon: <Sprout className="h-5 w-5" />,
  },
  {
    name: "Watering Schedule",
    href: "/dashboard/watering",
    icon: <Droplets className="h-5 w-5" />,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Plant Chat",
    href: "/dashboard/chat",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    name: "Help & Support",
    href: "/dashboard/help",
    icon: <HelpCircle className="h-5 w-5" />,
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Priya Sharma</CardTitle>
              <CardDescription>Plant Enthusiast</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Plants</p>
              <p className="font-medium">12</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Streak</p>
              <p className="font-medium">7 days</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Level</p>
              <p className="font-medium">Intermediate</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Plant
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "default" : "ghost"}
            className={`w-full justify-start ${
              pathname === item.href ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""
            }`}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              <span className="ml-2">{item.name}</span>
              {item.name === "Watering Schedule" && (
                <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-600">
                  3
                </div>
              )}
            </Link>
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <Bell className="mr-2 h-5 w-5 text-emerald-600" /> Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              { plant: "Monstera", action: "Water", dueIn: "Today" },
              { plant: "Snake Plant", action: "Fertilize", dueIn: "Tomorrow" },
              { plant: "Fiddle Leaf Fig", action: "Mist", dueIn: "2 days" },
            ].map((reminder, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm p-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30"
              >
                <div>
                  <span className="font-medium">{reminder.plant}</span>
                  <span className="text-gray-500 dark:text-gray-400"> - {reminder.action}</span>
                </div>
                <span
                  className={`text-xs font-medium ${reminder.dueIn === "Today" ? "text-red-600" : "text-amber-600"}`}
                >
                  {reminder.dueIn}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

