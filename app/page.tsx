"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, MessageCircle, Star, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Brain, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useAppStore } from "./store/use-app-store"
import ChatInterface from "./components/chat-interface"
import CommunicationModal from "./components/communication-modal"
import Head from "next/head"

export default function TherapeuticScentsApp() {
  const { showChat, startChat } = useAppStore()
  const [currentArticle, setCurrentArticle] = useState(0)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  // Carousel articles data
  const articles = [
    {
      title: "Dr. Sarah Johnson",
      subtitle: "Clinical Aromatherapist",
      content: "Aromatherapy combined with massage therapy has been shown to significantly reduce cortisol levels and improve sleep quality in clinical studies. The personalized approach to scent selection enhances the therapeutic benefits.",
      rating: 5
    },
    {
      title: "Dr. Michael Chen",
      subtitle: "Neuroscience Researcher",
      content: "Our research indicates that specific scent molecules can trigger the limbic system, leading to a 45% reduction in anxiety markers when paired with targeted massage techniques.",
      rating: 5
    },
    {
      title: "Dr. Emily Roberts",
      subtitle: "Holistic Wellness Expert",
      content: "The synergy between therapeutic massage and personalized, science-backed scents is profound. We've observed a 2.3x increase in muscle tension relief compared to massage alone.",
      rating: 5
    }
  ]
  
  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length)
  }

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length)
  }

  if (showChat) {
    return <ChatInterface />
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Head>
        <title>Therapeutic Scents</title>
        <meta name="description" content="AI-Powered Massage Therapy to reduce stress & improve sleep quality using therapeutic scents inspired by science." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CommunicationModal isOpen={contactModalOpen} setIsOpen={setContactModalOpen} />
      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-4 md:p-6">
        <div className="text-xl md:text-2xl font-bold text-stone-900">Therapeutic Scents™</div>
        <Button 
          variant="outline" 
          className="border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white"
          onClick={() => setContactModalOpen(true)}
        >
          Contact
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg max-w-5xl mx-auto"
          >
            <span className="text-teal-300 drop-shadow-lg">AI-Powered</span> Massage Therapy to reduce stress & improve sleep quality
            using therapeutic scents <em className="italic">inspired by science.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle mb-6 md:mb-8 text-white drop-shadow-lg max-w-4xl mx-auto"
          >
            Using Therapeutic Scent™<br />
            Book Personalized Massage Therapy with AI Driven Science Based Aromatherapy to boost your therapy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={startChat}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full transition-all hover:scale-105"
            >
              Start My Journey <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Video Play Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 hover:bg-white/30 transition-all"
        >
          <Play className="h-6 w-6 md:h-8 md:w-8 text-white" />
        </motion.button>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-stone-900"
          >
            How our smart system works
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              {
                icon: <MessageCircle className="h-10 w-10 md:h-12 md:w-12 text-teal-700" />,
                title: "AI Chat Assessment",
                description:
                  "Tell our AI about your wellness needs, scent preferences, and therapy goals through an intuitive chat interface.",
              },
              {
                icon: <Brain className="h-10 w-10 md:h-12 md:w-12 text-teal-700" />,
                title: "Smart Matching",
                description:
                  "Our advanced matching technology pairs you with a certified therapist and therapy that's right for you, plus a personalized science-based aromatherapy blend designed to enhance your therapeutic goals",
              },
              {
                icon: <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-teal-700" />,
                title: "Book & Relax",
                description:
                  "Connect directly with your matched therapist via WhatsApp or Telegram and schedule your personalized session.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-teal-100/50 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-stone-800">{step.title}</h3>
                <p className="text-sm md:text-base text-stone-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={startChat}
              variant="outline"
              size="lg"
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full transition-all hover:scale-105"
            >
              Get Matches Now <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-stone-900"
          >
            What Science Says
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto relative"
          >
             <Card className="bg-white border-stone-200/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-lg text-stone-700 mb-4">"{articles[currentArticle].content}"</p>
                    <h3 className="font-bold text-stone-800">{articles[currentArticle].title}</h3>
                    <p className="text-sm text-stone-500">{articles[currentArticle].subtitle}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(articles[currentArticle].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                <Button onClick={prevArticle} variant="outline" size="icon" className="rounded-full bg-white/50 border-stone-200 text-stone-600 hover:bg-white">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button onClick={nextArticle} variant="outline" size="icon" className="rounded-full bg-white/50 border-stone-200 text-stone-600 hover:bg-white">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-stone-900 mb-6"
            >
              The Benefits of Personalized Aromatherapy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-600 mb-8"
            >
              Our unique approach combines the ancient wisdom of aromatherapy with modern AI to create a truly personalized therapeutic experience. Each scent blend is designed to work in synergy with your massage, targeting your specific wellness goals.
            </motion.p>
            <div className="space-y-4">
              {[
                "Enhanced Stress Reduction",
                "Improved Sleep Quality",
                "Targeted Muscle Relief",
                "Boosted Mood and Well-being",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                  <span className="text-lg text-stone-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="h-96 rounded-2xl bg-stone-200"
            style={{ backgroundImage: "url('/t2.jpg')", backgroundSize: 'cover' }}
          />
        </div>
      </section>

       {/* Final CTA Section */}
       <section className="bg-stone-800 text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready for a transformative experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-stone-300 mb-8"
          >
            Your journey to relaxation and well-being is just a conversation away. Let our AI assistant guide you to the perfect therapy session.
          </motion.p>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={startChat}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Chat with Our AI Assistant <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
              </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Therapeutic Scents™. All rights reserved to Tomer Massage Group. If you want to join our group, contact +972547451527</p>
          <p className="mt-2">This service is intended for wellness purposes and does not constitute medical advice.</p>
        </div>
      </footer>
    </div>
  )
}
