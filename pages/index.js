import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Heart, Star, Share2, ShoppingCart, Calendar, MapPin, Clock } from 'lucide-react'

export default function Home() {
  const [likedCards, setLikedCards] = useState(new Set())
  const [cartItems, setCartItems] = useState(new Set())

  const toggleLike = (cardId) => {
    const newLiked = new Set(likedCards)
    if (newLiked.has(cardId)) {
      newLiked.delete(cardId)
    } else {
      newLiked.add(cardId)
    }
    setLikedCards(newLiked)
  }

  const toggleCart = (cardId) => {
    const newCart = new Set(cartItems)
    if (newCart.has(cardId)) {
      newCart.delete(cardId)
    } else {
      newCart.add(cardId)
    }
    setCartItems(newCart)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      rating: 4.8,
      reviews: 1247,
      category: "Electronics",
      image: "🎧"
    },
    {
      id: 2,
      title: "Smart Fitness Tracker",
      description: "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.",
      price: "$149.99",
      rating: 4.6,
      reviews: 892,
      category: "Fitness",
      image: "⌚"
    },
    {
      id: 3,
      title: "Organic Coffee Blend",
      description: "Premium organic coffee blend sourced from sustainable farms around the world.",
      price: "$24.99",
      rating: 4.9,
      reviews: 2156,
      category: "Food & Beverage",
      image: "☕"
    }
  ]

  const events = [
    {
      id: 4,
      title: "Tech Conference 2024",
      description: "Join industry leaders for the biggest tech conference of the year.",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      time: "9:00 AM - 6:00 PM",
      category: "Conference",
      image: "🚀"
    },
    {
      id: 5,
      title: "Design Workshop",
      description: "Learn modern design principles and best practices from expert designers.",
      date: "March 22, 2024",
      location: "New York, NY",
      time: "2:00 PM - 5:00 PM",
      category: "Workshop",
      image: "🎨"
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Shadcn/UI Components
                <span className="block text-blue-200">Demo Showcase</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Explore beautiful, accessible, and customizable UI components built with Radix UI and Tailwind CSS
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Documentation
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Button Showcase Section */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Button Components</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Versatile button components with multiple variants, sizes, and states
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Default Buttons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Default Variants</h3>
                  <div className="space-y-3">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button className="w-full">Primary Button</Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button variant="secondary" className="w-full">Secondary Button</Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button variant="outline" className="w-full">Outline Button</Button>
                    </motion.div>
                  </div>
                </div>

                {/* Destructive & Ghost */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Special Variants</h3>
                  <div className="space-y-3">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button variant="destructive" className="w-full">Destructive Button</Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button variant="ghost" className="w-full">Ghost Button</Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button variant="link" className="w-full">Link Button</Button>
                    </motion.div>
                  </div>
                </div>

                {/* Sizes & Icons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Sizes & Icons</h3>
                  <div className="space-y-3">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button size="sm" className="w-full">
                        <Star className="w-4 h-4 mr-2" />
                        Small Button
                      </Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button size="lg" className="w-full">
                        <Heart className="w-4 h-4 mr-2" />
                        Large Button
                      </Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Product Cards Section */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Cards</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Interactive product cards with hover effects and state management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="text-4xl mb-2">{product.image}</div>
                      </div>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-4">{product.price}</div>
                    </CardContent>
                    <Separator />
                    <CardFooter className="flex gap-2 pt-6">
                      <motion.div 
                        className="flex-1"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button 
                          className="w-full"
                          onClick={() => toggleCart(product.id)}
                          variant={cartItems.has(product.id) ? "secondary" : "default"}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {cartItems.has(product.id) ? "In Cart" : "Add to Cart"}
                        </Button>
                      </motion.div>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button 
                          size="icon" 
                          variant="outline"
                          onClick={() => toggleLike(product.id)}
                          className={likedCards.has(product.id) ? "text-red-500 border-red-200" : ""}
                        >
                          <Heart className={`w-4 h-4 ${likedCards.has(product.id) ? "fill-current" : ""}`} />
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Event Cards Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Cards</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Event cards with detailed information and call-to-action buttons
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <Card className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="text-4xl mb-2">{event.image}</div>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-gray-600">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </CardContent>
                    <Separator />
                    <CardFooter>
                      <Button size="sm" variant="secondary" className="w-full">
                        Register
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  )
}
