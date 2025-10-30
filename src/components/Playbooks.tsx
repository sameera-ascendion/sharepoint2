import { motion } from "motion/react";
import { BookOpen, ArrowRight, Download, Eye, Star, Layers, TrendingUp } from "lucide-react";

interface PlaybooksProps {
  onNavigateToDetail?: () => void;
}

export function Playbooks({ onNavigateToDetail }: PlaybooksProps) {
  const playbooksList = [
    { name: "Strategy Alignment", downloads: "234", status: "Updated", icon: Layers },
    { name: "Process Modeling", downloads: "189", status: "New", icon: TrendingUp },
    { name: "Governance Framework", downloads: "156", status: "Popular", icon: Star }
  ];

  return (
    <section id="playbooks" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Card - Takes up 2/3 on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-3xl p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            {/* Animated background orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-10 -left-10 w-60 h-60 bg-white rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="shrink-0 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <BookOpen className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <h2 className="text-5xl mb-4">Playbooks</h2>
                  <div className="w-20 h-1 bg-white/50 mb-6"></div>
                  
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    Our playbooks bring together core frameworks, implementation guides, and process blueprints 
                    that drive transformation. They form the foundation for consistency, alignment, and 
                    scalability across business functions.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      4 Core Frameworks
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      560+ Downloads
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      Recently Updated
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={onNavigateToDetail}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 bg-white text-[#00B097] px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    View All Playbooks
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Stack - Takes up 1/3 on desktop */}
          <div className="lg:col-span-4 space-y-6">
            {playbooksList.map((playbook, index) => {
              const IconComponent = playbook.icon;
              return (
                <motion.div
                  key={playbook.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#00B097] hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-xl flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-gray-900 group-hover:text-[#00B097] transition-colors">
                          {playbook.name}
                        </h4>
                        <span className="text-xs px-2 py-1 bg-[#e6f7f5] text-[#00B097] rounded-full shrink-0 ml-2">
                          {playbook.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{playbook.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
