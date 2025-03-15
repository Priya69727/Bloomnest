import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Leaf, Package, Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import SubscriptionFAQ from "./subscription-faq"

export const metadata: Metadata = {
  title: "Plant Care Subscription | BloomNest",
  description: "Subscribe to our monthly plant care box and receive curated plants, care products, and expert tips.",
}

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4 text-green-800 dark:text-green-300">Plant Care Subscription Box</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Receive a curated selection of plants, care products, and expert tips delivered to your doorstep every month.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center rounded-xl h-[500px]"></div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-300">Why Subscribe?</h2>
          <div className="space-y-6">
            {[
              {
                icon: <Leaf className="h-6 w-6 text-emerald-600" />,
                title: "Discover New Plants",
                description: "Expand your collection with carefully selected plants that match your experience level.",
              },
              {
                icon: <Package className="h-6 w-6 text-emerald-600" />,
                title: "Premium Care Products",
                description: "Receive high-quality, eco-friendly plant care products tailored to your plants' needs.",
              },
              {
                icon: <Calendar className="h-6 w-6 text-emerald-600" />,
                title: "Seasonal Care Guides",
                description: "Learn how to care for your plants with expert tips and seasonal care guides.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800 dark:text-green-300">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "₹999",
              description: "Perfect for beginners",
              features: ["1 small plant per month", "Basic care products", "Digital care guide", "Email support"],
            },
            {
              title: "Premium",
              price: "₹1,499",
              description: "Our most popular plan",
              features: [
                "1 medium plant per month",
                "Premium care products",
                "Printed care guide",
                "Priority email support",
                "Access to online workshops",
              ],
              popular: true,
            },
            {
              title: "Collector",
              price: "₹2,499",
              description: "For plant enthusiasts",
              features: [
                "2 plants per month (rare varieties)",
                "Premium care products",
                "Printed care guide",
                "Priority email support",
                "Access to online workshops",
                "Quarterly plant health check-up",
              ],
            },
          ].map((plan, index) => (
            <Card key={index} className={`${plan.popular ? "border-emerald-500 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="bg-emerald-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400"> / month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}>
                  Subscribe Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-800 dark:text-green-300">How It Works</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Choose Your Plan",
                  description:
                    "Select the subscription plan that best fits your plant care needs and experience level.",
                },
                {
                  step: "2",
                  title: "Customize Your Preferences",
                  description: "Tell us about your space, lighting conditions, and plant preferences.",
                },
                {
                  step: "3",
                  title: "Receive Your Monthly Box",
                  description: "Your curated plant box will be delivered to your doorstep every month.",
                },
                {
                  step: "4",
                  title: "Grow Your Collection",
                  description: "Enjoy your new plants and care products, and watch your collection grow!",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center rounded-xl h-[400px]"></div>
        </div>
      </div>

      <SubscriptionFAQ />

      <div className="text-center max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-4 text-green-800 dark:text-green-300">
          Ready to Start Your Plant Journey?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of plant lovers who have transformed their homes with our subscription box.
        </p>
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          Subscribe Now
        </Button>
      </div>
    </div>
  )
}

