

"use client"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-neutral-900 space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight dark:text-white">
              Big <span className="text-blue-400">Goal,</span><br />
              Tiny <span className="text-blue-400">Step.</span><br />
              Your <span className="text-blue-400">Brain,</span><br />
               Best  <span className="text-blue-400">Brain.</span><br />
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-900 leading-relaxed max-w-2xl dark:text-neutral-200">
              The Smart Companion that breaks down overwhelming tasks into bite-sized wins. Designed for ADHD, Autism, and the neuro-diverse mind.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/screen"
                className="group bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 text-center"
              >
                Start Screening Now 
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/dyslexia"
                className="group bg-transparent border-2 border-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 text-center"
              >
                Dyslexia Mode
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            
          </div>

      
          {/*  */}
      <div className="relative order-1 lg:order-2 animate-fade-in flex items-center justify-center top-10 " style={{ animationDelay: '0.2s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
            
            {/* Main Card Container - Centered and Smaller */}
            <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-5 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.5)] border border-white/30 max-w-sm w-full">
              {/* Floating Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black px-5 py-1.5 rounded-full text-xs font-bold shadow-2xl z-10 animate-pulse">
                ✨ AI-Powered
              </div>

              {/* Image Container with Overlay */}
              <div className="relative rounded-2xl overflow-hidden group shadow-2xl">
                {/* Placeholder for actual app screenshot/image */}
                <div className="aspect-[9/11] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                  </div>

                  {/* Content */}
                  <div className="text-center p-6 text-black space-y-3 relative z-10">
                    <div className="w-16 h-16 mx-auto bg-white/25 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3 shadow-xl ring-4 ring-white/30">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold drop-shadow-lg">Task Breakdown</h3>
                    <p className="text-black/95 text-sm drop-shadow-md">Break big goals into tiny wins</p>
                    
                    {/* Mock Progress Steps */}
                    <div className="space-y-2.5 mt-6">
                      <div className="bg-white/30 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg border border-white/40">
                        <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Get started ✓</span>
                      </div>
                      <div className="bg-white/30 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg border border-white/40">
                        <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Break it down ✓</span>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-300/40 to-orange-300/40 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg border-2 border-yellow-300/60 animate-pulse">
                        <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-xs font-bold text-black">3</span>
                        </div>
                        <span className="text-sm font-bold">Take action now!</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                <span className="bg-gradient-to-r from-pink-400/30 to-purple-400/30 backdrop-blur-sm text-black text-xs px-3 py-1.5 rounded-full border border-white/40 shadow-md font-medium">
                  🧠 ADHD Friendly
                </span>
                <span className="bg-gradient-to-r from-blue-400/30 to-cyan-400/30 backdrop-blur-sm text-black text-xs px-3 py-1.5 rounded-full border border-white/40 shadow-md font-medium">
                  🎯 Goal Tracking
                </span>
                <span className="bg-gradient-to-r from-yellow-400/30 to-orange-400/30 backdrop-blur-sm text-black text-xs px-3 py-1.5 rounded-full border border-white/40 shadow-md font-medium">
                  ⚡ Quick Wins
                </span>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-br from-green-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">95%</div>
                  <div className="text-xs text-black/80 mt-0.5 font-medium">Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">2.5k</div>
                  <div className="text-xs text-black/80 mt-0.5 font-medium">Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">4.9★</div>
                  <div className="text-xs text-black/80 mt-0.5 font-medium">Rating</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-6 top-1/4 bg-white/20 backdrop-blur-md rounded-2xl p-3 shadow-2xl hidden xl:block animate-float border border-white/30">
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-neutral-900">
                  <div className="font-bold text-sm">Goal Done!</div>
                  <div className="text-xs text-black/80">+10 points</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 bottom-1/3 bg-white/20 backdrop-blur-md rounded-2xl p-3 shadow-2xl hidden xl:block animate-float border border-white/30" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-neutral-900">
                  <div className="font-bold text-sm">7 Day Streak!</div>
                  <div className="text-xs text-black/80">Keep it up!</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
