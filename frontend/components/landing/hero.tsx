
export  default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-neutral-900 space-y-8 animate-fade-in">
          

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight dark:text-white">
              Screening <span className="text-red-600">Endemic Diseases</span><br />
              Without Lab Tests
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-neutral-900 leading-relaxed max-w-2xl dark:text-white">
              Empowering ASHA workers in rural Assam with a <strong>smartphone-based screening tool</strong> that detects anemia risk in <strong>5 minutes</strong> — completely free, 100% offline.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 py-4 dark:text-white">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-300">58%</div>
                <div className="text-xs md:text-sm text-neutral-900 mt-1 dark:text-white">Women Anemic<br/>in Assam</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-300">₹0</div>
                <div className="text-xs md:text-sm text-neutral-900 mt-1 dark:text-white">Cost Per<br/>Screening</div>
              </div>
              <div className="text-center dark:text-white">
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">5 min</div>
                <div className="text-xs md:text-sm text-neutral-900 mt-1 dark:text-white">Assessment<br/>Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/screen"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 text-center"
              >
                Start Screening Now →
              </a>
              
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-neutral-900 dark:text-white">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>WHO Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>NFHS-5 Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Assam-First</span>
              </div>
            </div>
          </div>

          
                   
                  </div>
                </div>
           

             
              

            
            
    
       
        
    


      
    </section>
  )
}

