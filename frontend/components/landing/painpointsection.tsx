"use client"
export default function PainPointSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Why does <span className="text-red-500">"Starting"</span> feel so <span className="text-red-500">hard?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            You're not lazy. You're not broken. Your brain just works differently. 
            <span className="block mt-4 font-semibold text-gray-900 dark:text-white">
              Executive dysfunction isn't a character flaw—it's a neurodivergent experience.
            </span>
          </p>
        </div>

        {/* Before vs After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* BEFORE - The Wall of Awful */}
          <div className="relative group">
            {/* Card */}
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-red-200 dark:border-red-900 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              {/* Chaos Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-red-500 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-yellow-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Badge */}
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                😰 BEFORE
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                The Wall of Awful
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Your mind is flooded with thoughts, worries, and tasks all screaming for attention at once. 
                It feels impossible to even know where to begin.
              </p>

              {/* Chaotic Task Visualization */}
              <div className="space-y-3 relative">
                {/* Overlapping, chaotic tasks */}
                <div className="absolute inset-0 flex flex-wrap gap-2 animate-shake">
                  {[
                    { text: "Call doctor", top: "5%", left: "10%", rotate: "-12deg", color: "bg-red-400" },
                    { text: "Pay bills", top: "20%", left: "50%", rotate: "8deg", color: "bg-orange-400" },
                    { text: "Reply emails", top: "15%", left: "70%", rotate: "-5deg", color: "bg-yellow-400" },
                    { text: "Clean room", top: "35%", left: "15%", rotate: "15deg", color: "bg-pink-400" },
                    { text: "Buy groceries", top: "40%", left: "55%", rotate: "-8deg", color: "bg-purple-400" },
                    { text: "Finish project", top: "50%", left: "30%", rotate: "12deg", color: "bg-red-500" },
                    { text: "Study", top: "60%", left: "65%", rotate: "-15deg", color: "bg-orange-500" },
                    { text: "Exercise", top: "70%", left: "20%", rotate: "6deg", color: "bg-yellow-500" },
                    { text: "Call mom", top: "75%", left: "75%", rotate: "-10deg", color: "bg-pink-500" },
                    { text: "Fix bug", top: "85%", left: "45%", rotate: "18deg", color: "bg-purple-500" },
                  ].map((task, index) => (
                    <div
                      key={index}
                      className={`absolute ${task.color} text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-90 hover:opacity-100 transition-opacity`}
                      style={{
                        top: task.top,
                        left: task.left,
                        transform: `rotate(${task.rotate})`,
                        animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      {task.text}
                    </div>
                  ))}
                </div>

                {/* Placeholder height to maintain space */}
                <div className="h-80"></div>
              </div>

              {/* Symptoms List */}
              <div className="mt-6 space-y-3 border-t-2 border-red-200 dark:border-red-900 pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😵</span>
                  <span className="text-gray-700 dark:text-gray-300">Overwhelmed by everything at once</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏸️</span>
                  <span className="text-gray-700 dark:text-gray-300">Frozen, can't start anything</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">😓</span>
                  <span className="text-gray-700 dark:text-gray-300">Exhausted before you even begin</span>
                </div>
              </div>
            </div>
          </div>

          {/* AFTER - Structured Clarity */}
          <div className="relative group">
            {/* Card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-green-300 dark:border-green-700 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              {/* Calm Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
              </div>

              {/* Badge */}
              <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                ✨ AFTER
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Structured Clarity
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Every overwhelming task is broken down into tiny, manageable steps. 
                You know exactly what to do next—no thinking required.
              </p>

              {/* Organized Task Visualization */}
              <div className="space-y-3">
                {/* Step 1 - Completed */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md border-2 border-green-300 dark:border-green-600 flex items-center gap-3 transform transition-all hover:translate-x-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white line-through opacity-60">Open email app</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2 minutes • Completed</div>
                  </div>
                </div>

                {/* Step 2 - Completed */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md border-2 border-green-300 dark:border-green-600 flex items-center gap-3 transform transition-all hover:translate-x-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white line-through opacity-60">Find doctor's email</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">3 minutes • Completed</div>
                  </div>
                </div>

                {/* Step 3 - In Progress */}
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-xl p-4 shadow-lg border-2 border-blue-400 dark:border-blue-500 flex items-center gap-3 animate-pulse transform transition-all hover:translate-x-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md animate-spin-slow">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white">Write "Hi Dr. Smith..."</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Current step • 5 minutes</div>
                  </div>
                </div>

                {/* Step 4 - Upcoming */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border-2 border-gray-200 dark:border-gray-600 flex items-center gap-3 opacity-50 transform transition-all hover:opacity-100 hover:translate-x-1">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">4</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-700 dark:text-gray-300">Review and send</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2 minutes • Next</div>
                  </div>
                </div>

                {/* Step 5 - Upcoming */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border-2 border-gray-200 dark:border-gray-600 flex items-center gap-3 opacity-50 transform transition-all hover:opacity-100 hover:translate-x-1">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">5</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-700 dark:text-gray-300">Celebrate! 🎉</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">1 minute</div>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mt-6 space-y-3 border-t-2 border-green-300 dark:border-green-700 pt-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-700 dark:text-gray-300">Clear, actionable next step</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span className="text-gray-700 dark:text-gray-300">Progress happens automatically</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💪</span>
                  <span className="text-gray-700 dark:text-gray-300">Feel accomplished, not overwhelmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Ready to break through your wall?
          </p>
          <a
            href="/screen"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_10px_40px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_50px_rgba(59,130,246,0.5)] transform hover:-translate-y-1"
          >
            Start Your Journey →
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px) rotate(-1deg); }
          75% { transform: translateX(2px) rotate(1deg); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotate, 0deg)); 
          }
          50% { 
            transform: translateY(-10px) rotate(var(--rotate, 0deg)); 
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-shake {
          animation: shake 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  )
}