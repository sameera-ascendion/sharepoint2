import { motion } from "motion/react";
import { Network, ArrowRight, Zap, Globe, Target } from "lucide-react";

interface ConnectingDotsProps {
  onNavigateToDetail?: () => void;
}

export function ConnectingDots({ onNavigateToDetail }: ConnectingDotsProps) {
  const connections = [
    { 
      id: "tmo",
      title: "TMO", 
      subtitle: "Transformation Management",
      description: "Strategic transformation orchestration",
      color: "from-[#00B097] to-[#00C7A7]",
      icon: Zap
    },
    { 
      id: "easa",
      title: "EA/SA", 
      subtitle: "Enterprise & Solution Architecture",
      description: "Architectural excellence and alignment",
      color: "from-[#00C7A7] to-[#4ECDC4]",
      icon: Globe
    },
    { 
      id: "tco",
      title: "TCO", 
      subtitle: "Technology & Operations",
      description: "Operational efficiency and innovation",
      color: "from-[#4ECDC4] to-[#44A08D]",
      icon: Target
    }
  ];

  return (
    <section id="connect" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Modern Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-3xl p-10 text-white relative overflow-hidden"
          >
            {/* Animated network pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
              <motion.circle 
                cx="100" cy="100" r="4" fill="white"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.circle 
                cx="300" cy="100" r="4" fill="white"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.circle 
                cx="200" cy="300" r="4" fill="white"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <motion.line 
                x1="100" y1="100" x2="300" y2="100" stroke="white" strokeWidth="1"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.line 
                x1="100" y1="100" x2="200" y2="300" stroke="white" strokeWidth="1"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.line 
                x1="300" y1="100" x2="200" y2="300" stroke="white" strokeWidth="1"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </svg>
            
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg mb-6"
              >
                <Network className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-5xl mb-4">Connecting Dots</h2>
              <div className="w-20 h-1 bg-white/50 mb-6"></div>
              
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Transformation, Architecture, and Operations — all aligned through the TMO, EA/SA, and TCO 
                collaboration model. Together, they ensure strategic goals are executed efficiently and 
                consistently.
              </p>
              
              <motion.button
                onClick={onNavigateToDetail}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white text-[#00B097] px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                Discover the Connections
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Connection Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {connections.map((connection, index) => {
              const IconComponent = connection.icon;
              return (
                <motion.div
                  key={connection.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#00B097] hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient accent on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${connection.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${connection.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-3xl text-gray-900 mb-2 group-hover:text-[#00B097] transition-colors">
                      {connection.title}
                    </h3>
                    
                    <p className="text-sm text-[#00B097] mb-3">
                      {connection.subtitle}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {connection.description}
                    </p>

                    {/* Connection Line Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className={`h-1 flex-1 bg-gradient-to-r ${connection.color} rounded-full`}></div>
                      <ArrowRight className="w-4 h-4 text-[#00B097] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 bg-gradient-to-r from-[#e6f7f5] to-white rounded-2xl p-6 border border-[#00B097]/20 flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-xl flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-gray-900">Integrated Collaboration Model</h4>
              <p className="text-sm text-gray-600">Seamless alignment across transformation, architecture, and operations</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00B097]"></div>
              <span>Cross-functional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00C7A7]"></div>
              <span>Strategic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4ECDC4]"></div>
              <span>Operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
