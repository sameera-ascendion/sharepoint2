import { motion } from "motion/react";
import { FileText, Users, GitBranch, BookOpen, Settings, HelpCircle, Presentation, Calendar } from "lucide-react";

export function QuickLinks() {
  const links = [
    {
      icon: FileText,
      title: "Submit Request",
      description: "Submit tool access requests",
      href: "#"
    },
    {
      icon: Users,
      title: "Team Directory",
      description: "Find team members",
      href: "#"
    },
    {
      icon: GitBranch,
      title: "Workflows",
      description: "View process maps",
      href: "#"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Browse knowledge base",
      href: "#"
    },
    {
      icon: Presentation,
      title: "Presentations",
      description: "Template library",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Upcoming sessions",
      href: "#"
    },
    {
      icon: Settings,
      title: "Tools",
      description: "iGrafx & more",
      href: "#"
    },
    {
      icon: HelpCircle,
      title: "Support",
      description: "Get help",
      href: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl mb-3 text-[#00B097]">Quick Links</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00B097] to-[#00C7A7] mx-auto mb-4"></div>
          <p className="text-gray-600">Fast access to frequently used tools and resources</p>
        </motion.div>

        {/* Horizontal scrollable container */}
        <div className="relative">
          {/* Gradient fade on right edge for visual hint */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block"></div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#00B097] transition-all duration-300 hover:shadow-lg cursor-pointer flex-shrink-0 w-[200px]"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#e6f7f5] to-[#d1f0ec] flex items-center justify-center group-hover:from-[#00B097] group-hover:to-[#00C7A7] transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-[#00B097] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1 group-hover:text-[#00B097] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator on mobile */}
        <div className="md:hidden text-center mt-4">
          <p className="text-xs text-gray-400">← Scroll for more →</p>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
