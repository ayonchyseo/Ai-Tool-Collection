/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Sparkles, Zap, Search, Layout, ArrowRight } from "lucide-react";

const tools = [
  {
    title: "Pinterest Automation Tool",
    description: "Automate your Pinterest growth and content scheduling with AI-driven insights.",
    url: "https://ayonchy.com/pinterest-automation-tool/",
    icon: <Zap className="w-5 h-5" />,
    tag: "Automation"
  },
  {
    title: "Auto Internal Link Builder by AI",
    description: "Boost your SEO by automatically building smart internal links across your content.",
    url: "https://ayonchy.com/auto-internal-link-builder-by-ai/",
    icon: <Sparkles className="w-5 h-5" />,
    tag: "SEO"
  },
  {
    title: "Rank on Reddit",
    description: "Strategies and tools to help your content gain visibility and rank on Reddit.",
    url: "https://ayonchy.com/rank-on-reddit/",
    icon: <Search className="w-5 h-5" />,
    tag: "Marketing"
  },
  {
    title: "Schema Pro AI Auto Schema Generator",
    description: "Generate perfect schema markup automatically to enhance your search presence.",
    url: "https://ayonchy.com/schema-pro-ai-auto-schema-generator/",
    icon: <Layout className="w-5 h-5" />,
    tag: "SEO"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-orange-100">
      {/* SEO Meta Tags (Semantic) */}
      <header className="sr-only">
        <h1>AI Tool Collections by Ayonchy</h1>
        <p>Explore a curated collection of powerful AI-driven automation and SEO tools designed to scale your online presence.</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">
              By Ayonchy
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-[1.1]">
            AI Tool <span className="italic font-serif">Collections</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            A suite of precision-engineered tools to automate your workflow, 
            enhance your SEO, and dominate search rankings.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:border-orange-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors duration-300">
                  {tool.icon}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  {tool.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-medium mb-3 group-hover:text-orange-600 transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {tool.description}
              </p>

              <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold group/btn"
              >
                Explore Tool
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: tools.length * 0.1 }}
            className="flex flex-col items-center justify-center border border-dashed border-gray-200 p-8 rounded-2xl bg-gray-50/50"
          >
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-gray-300" />
            </div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              More Tools Coming Soon
            </p>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-gray-50 rounded-3xl border border-gray-100"
        >
          <h3 className="text-2xl font-light mb-6 tracking-tight">About the <span className="italic font-serif">Author</span></h3>
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            Ayonchy is a dedicated developer and SEO specialist focused on building tools that bridge the gap between AI and practical application. 
            Each tool in this collection is designed to solve real-world problems for marketers, developers, and content creators.
          </p>
        </motion.section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest font-medium">
          <div>© 2026 Ayonchy.com</div>
          <div className="flex gap-8">
            <a href="https://ayonchy.com" className="hover:text-orange-600 transition-colors">Main Site</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Terms</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

