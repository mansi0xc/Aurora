import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Wallet, Zap, Shield, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="border-b bg-white/50 backdrop-blur-md dark:bg-gray-800/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center">
            <Zap className="w-8 h-8 mr-2" />
            Aurora
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#how-it-works" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">How It Works</Link>
            <Link href="#featured-campaigns" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Featured Campaigns</Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">About</Link>
          </nav>
          {/* <Button variant="outline" className="bg-white dark:bg-gray-800">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button> */}
          <ConnectButton />
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Empower Innovation with Aurora
              </h1>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Secure, transparent, and decentralized crowdfunding for groundbreaking projects
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Start a Campaign <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white dark:bg-gray-800">
                  Explore Projects
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 opacity-10 animate-pulse"></div>
        </section>

        <section className="py-20" id="how-it-works">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Aurora Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Zap className="h-12 w-12 text-purple-600" />, title: "Create", description: "Set up your campaign with details and funding goals" },
                { icon: <Shield className="h-12 w-12 text-purple-600" />, title: "Fund", description: "Backers contribute using cryptocurrency securely" },
                { icon: <Globe className="h-12 w-12 text-purple-600" />, title: "Build", description: "Receive funds and bring your project to life" }
              ].map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto">{step.icon}</div>
                    <CardTitle className="mt-4">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-purple-50 dark:bg-gray-800" id="featured-campaigns">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "EcoTech Revolution", goal: "100 ETH", raised: "75 ETH", image: "/placeholder.svg?height=200&width=400&text=EcoTech" },
                { title: "Decentralized Learning", goal: "50 ETH", raised: "30 ETH", image: "/placeholder.svg?height=200&width=400&text=DecLearn" },
                { title: "Community Marketplace", goal: "200 ETH", raised: "150 ETH", image: "/placeholder.svg?height=200&width=400&text=ComMarket" }
              ].map((campaign, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{campaign.title}</CardTitle>
                    <CardDescription>Goal: {campaign.goal}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-purple-600 h-2.5 rounded-full" 
                        style={{ width: `${(parseInt(campaign.raised) / parseInt(campaign.goal)) * 100}%` }}
                      ></div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Raised: {campaign.raised}</p>
                    <Button variant="outline" size="sm">Contribute</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Launch Your Idea?</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join Aurora today and turn your vision into reality with the power of blockchain and community support.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Start Your Campaign
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Aurora</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">About Us</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Blog</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Help Center</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Twitter</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Discord</Link></li>
                <li><Link href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p>&copy; 2023 Aurora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

