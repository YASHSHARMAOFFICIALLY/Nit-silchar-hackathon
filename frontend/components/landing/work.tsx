'use client'

import { useState, useEffect } from 'react'

export default function SingleTaskDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showMasking, setShowMasking] = useState(false)
  const [showTaskCard, setShowTaskCard] = useState(false)

  // Auto-play demo
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep === 0) {
        // Start typing animation
        setIsTyping(true)
        simulateTyping("Clean the kitchen before Mom arrives at 3pm")
      } else if (currentStep === 1) {
        // Show masking
        setShowMasking(true)
        setTimeout(() => setCurrentStep(2), 2000)
      } else if (currentStep === 2) {
        // Clear and show task card
        setUserInput('')
        setShowMasking(false)
        setTimeout(() => setShowTaskCard(true), 300)
      }
    }, currentStep === 0 ? 1000 : 0)

    return () => clearTimeout(timer)
  }, [currentStep])

  const simulateTyping = (text: string) => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setUserInput(prev => prev + text[i])
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
        setTimeout(() => setCurrentStep(1), 800)
      }
    }, 80)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setUserInput('')
    setIsTyping(false)
    setShowMasking(false)
    setShowTaskCard(false)
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            🎯 SEE IT IN ACTION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
            How It <span className="text-blue-600 dark:text-blue-400">Actually Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Watch how we transform overwhelming tasks into achievable micro-steps
          </p>
        </div>

        {/* Interactive Demo Container */}
        <div className="max-w-4xl mx-auto">
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[
              { num: 1, label: 'Input Task', active: currentStep >= 0 },
              { num: 2, label: 'Mask PII', active: currentStep >= 1 },
              { num: 3, label: 'Get First Step', active: currentStep >= 2 }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ${
                  step.active 
                    ? 'bg-blue-500 text-white shadow-lg scale-105' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    {step.num}
                  </span>
                  <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                </div>
                {idx < 2 && (
                  <svg className="w-6 h-6 mx-2 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Demo Screen */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-4 border-gray-200 dark:border-gray-700 overflow-hidden min-h-[500px]">
            {/* App Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg">TaskBreaker AI</h3>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-6 md:p-8 min-h-[400px] flex flex-col">
              
              {/* Step 1: Input Area */}
              {currentStep === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-fade-in">
                  <div className="w-full max-w-2xl">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      What's overwhelming you today?
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={userInput}
                        readOnly
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Type your task here..."
                      />
                      {isTyping && (
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-5 h-5 inline mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI is listening...
                  </div>
                </div>
              )}

              {/* Step 2: PII Masking */}
              {currentStep === 1 && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-fade-in">
                  <div className="w-full max-w-2xl">
                    <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">Privacy Protection Active</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Detecting and masking sensitive information...</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-3">
                          <span className="text-gray-700 dark:text-gray-300">Clean the kitchen before {showMasking ? <span className="bg-yellow-200 dark:bg-yellow-700 px-2 py-1 rounded font-mono text-sm">Mom</span> : 'Mom'} arrives at {showMasking ? <span className="bg-yellow-200 dark:bg-yellow-700 px-2 py-1 rounded font-mono text-sm">3pm</span> : '3pm'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium">2 pieces of PII detected and masked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Your privacy is protected. Names and times are masked before AI processing.
                  </div>
                </div>
              )}

              {/* Step 3: Single Task Card */}
              {currentStep === 2 && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 animate-fade-in">
                  <div className="text-center mb-6">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Your brain only needs to think about</p>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">ONE THING</h3>
                  </div>

                  {showTaskCard && (
                    <div className="w-full max-w-lg animate-scale-in">
                      {/* Single Task Card */}
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
                              1
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wide text-white/80 font-semibold">Current Step</div>
                              <div className="text-sm text-white/90">Estimated: 2 minutes</div>
                            </div>
                          </div>
                          <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                            ACTIVE
                          </div>
                        </div>

                        <h4 className="text-3xl font-bold mb-4 leading-tight">
                          Put 3 plates in the sink
                        </h4>

                        <p className="text-white/90 mb-6 text-lg">
                          Just this one thing. That's it. Nothing else matters right now.
                        </p>

                        <div className="flex gap-3">
                          <button className="flex-1 bg-white text-blue-600 py-3 px-6 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            ✓ Mark Complete
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-xl hover:bg-white/30 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Helpful Tips */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-3 text-center border-2 border-gray-200 dark:border-gray-600">
                          <div className="text-2xl mb-1">🧠</div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">No overwhelm</div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-3 text-center border-2 border-gray-200 dark:border-gray-600">
                          <div className="text-2xl mb-1">⚡</div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Quick action</div>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-3 text-center border-2 border-gray-200 dark:border-gray-600">
                          <div className="text-2xl mb-1">🎯</div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Clear focus</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Reset Button */}
          <div className="text-center mt-8">
            <button
              onClick={resetDemo}
              className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Watch Again
            </button>
          </div>
        </div>

        {/* Bottom Explanation */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Single-Task Focus Works
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Neurodivergent brains thrive with <span className="font-semibold text-blue-600 dark:text-blue-400">clarity over choice</span>. 
            By showing you only the next tiny step, we remove decision paralysis and make progress inevitable.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}