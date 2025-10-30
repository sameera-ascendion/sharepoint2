import { motion } from "motion/react";
import { Users, ArrowRight, UserCheck, Calendar, MessageCircle, Award } from "lucide-react";

interface CommunityProps {
  onNavigateToDetail?: () => void;
}

export function Community({ onNavigateToDetail }: CommunityProps) {
  const employees = [
    { name: "Anita Sharma", image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Rahul Mehta", image: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Priya Das", image: "https://randomuser.me/api/portraits/women/64.jpg" },
    { name: "Arjun Patel", image: "https://randomuser.me/api/portraits/men/78.jpg" },
    { name: "Sneha Kumar", image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { name: "Vikram Singh", image: "https://randomuser.me/api/portraits/men/52.jpg" }
  ];

  const features = [
    { icon: UserCheck, label: "Who's Who", count: "150+ Members" },
    { icon: Calendar, label: "Office Hours", count: "Weekly" },
    { icon: MessageCircle, label: "Forums", count: "Active Daily" },
    { icon: Award, label: "Value Stories", count: "25+ Published" }
  ];

  return (
    <section id="community" className="py-20 bg-[#f7faf9]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Community Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#00B097] to-[#00C7A7] rounded-2xl flex items-center justify-center shadow-lg mb-6"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              
              <h2 className="text-4xl mb-4 text-[#00B097]">DBPM Community</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#00B097] to-transparent mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                The DBPM Community connects practitioners and leaders who model, measure, and optimize 
                enterprise processes. It's where collaboration meets capability — driving learning and 
                innovation across teams.
              </p>
              
              <motion.button
                onClick={onNavigateToDetail}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B097] to-[#00C7A7] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group w-full justify-center"
              >
                Meet the Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#00B097] hover:shadow-lg transition-all cursor-pointer"
                  >
                    <IconComponent className="w-6 h-6 text-[#00B097] mb-2" />
                    <p className="text-xs text-gray-900 mb-1">{feature.label}</p>
                    <p className="text-xs text-gray-500">{feature.count}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Member Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-gradient-to-br from-white to-[#f7faf9] rounded-3xl p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B097]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00C7A7]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl text-gray-900 mb-2">Active Members</h3>
                  <p className="text-gray-600">Connect with experts and practitioners</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl text-[#00B097]">150+</div>
                  <div className="text-sm text-gray-500">Members online</div>
                </div>
              </div>

              {/* Member Cards in 3x2 Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {employees.map((employee, index) => (
                  <motion.div
                    key={employee.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#00B097] hover:shadow-xl transition-all group cursor-pointer"
                  >
                    <div className="relative mb-4 mx-auto w-fit">
                      <div className="w-20 h-20 rounded-2xl border-3 border-[#00B097] overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:border-[#00C7A7] relative">
                        <img 
                          src={employee.image} 
                          alt={employee.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Online indicator */}
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#00B097] rounded-full border-2 border-white shadow-sm"></div>
                      </div>
                    </div>
                    <p className="text-sm text-center text-gray-700 group-hover:text-[#00B097] transition-colors">
                      {employee.name}
                    </p>
                    <p className="text-xs text-center text-gray-500 mt-1">Active now</p>
                  </motion.div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl text-[#00B097]">45</div>
                  <div className="text-sm text-gray-600">This Week</div>
                </div>
                <div>
                  <div className="text-2xl text-[#00B097]">200+</div>
                  <div className="text-sm text-gray-600">Total Posts</div>
                </div>
                <div>
                  <div className="text-2xl text-[#00B097]">98%</div>
                  <div className="text-sm text-gray-600">Active Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
