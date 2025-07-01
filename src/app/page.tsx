"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  ChartBarIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  LinkIcon,
  CheckCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { VideoPlayer } from "@/components/VideoPlayer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              MCP<span className="text-purple-400">Chain</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a>
              <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors duration-200">Roadmap</a>
              <a href="#coming-soon" className="text-gray-300 hover:text-white transition-colors duration-200">Coming Soon</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400/50">
              🚀 Decentralized AI Tool Registry
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            On-Chain AI Tool
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
              {" "}Registry
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            A decentralized registry where AI agents can discover, register, and execute tools securely. 
            MCPChain brings transparency, verifiability, and trust to AI agent interactions through 
            blockchain technology.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center gap-8"
          >
                        {/* Video Demo */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900/50 border border-slate-700">
                <VideoPlayer 
                  src="/demo-video.mp4"
                  className="w-full h-full"
                />
              </div>
              <p className="text-center text-gray-400 mt-4">Watch MCPChain in Action</p>
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg"
              onClick={() => window.open('https://github.com/EONXI-Studio/MCPChain', '_blank')}
            >
              <LinkIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                     <Card className="bg-slate-900/50 border-slate-800 text-center">
             <CardContent className="p-6">
               <div className="text-3xl font-bold text-purple-400 mb-2">MCP</div>
               <div className="text-gray-300">Protocol Integration</div>
             </CardContent>
           </Card>
           <Card className="bg-slate-900/50 border-slate-800 text-center">
             <CardContent className="p-6">
               <div className="text-3xl font-bold text-blue-400 mb-2">Web3</div>
               <div className="text-gray-300">Native Architecture</div>
             </CardContent>
           </Card>
           <Card className="bg-slate-900/50 border-slate-800 text-center">
             <CardContent className="p-6">
               <div className="text-3xl font-bold text-green-400 mb-2">AI</div>
               <div className="text-gray-300">Agent Coordination</div>
             </CardContent>
           </Card>
           <Card className="bg-slate-900/50 border-slate-800 text-center">
             <CardContent className="p-6">
               <div className="text-3xl font-bold text-pink-400 mb-2">Trust</div>
               <div className="text-gray-300">Registry System</div>
             </CardContent>
           </Card>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              What is MCPChain?
            </h2>
                         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
               The future of AI agent coordination through decentralized infrastructure
             </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold text-white mb-6">
                Revolutionizing AI Agent Interactions
              </h3>
                             <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                 MCPChain is a decentralized registry where AI agents can discover, register, and execute tools 
                 in a trustless environment. Think of it as an "app store" for AI agents, but powered by 
                 blockchain technology for complete transparency and security.
               </p>
               <p className="text-gray-300 leading-relaxed text-lg mb-8">
                 Every tool interaction is recorded on-chain, creating an immutable audit trail. This enables 
                 AI agents to work together reliably while maintaining full accountability and trust.
               </p>
              
              <div className="space-y-4">
                                 <div className="flex items-center space-x-3">
                   <CheckCircleIcon className="w-6 h-6 text-green-400" />
                   <span className="text-white text-lg">Blockchain Agnostic Design</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <CheckCircleIcon className="w-6 h-6 text-blue-400" />
                   <span className="text-white text-lg">Decentralized Tool Registry</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <CheckCircleIcon className="w-6 h-6 text-purple-400" />
                   <span className="text-white text-lg">Built-in Economic Incentives</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <CheckCircleIcon className="w-6 h-6 text-pink-400" />
                   <span className="text-white text-lg">MCP Protocol Compatible</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-900/80 to-purple-900/20 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Architecture Overview</CardTitle>
                                     <CardDescription className="text-gray-400">
                     Built with modern decentralized technologies
                   </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                                         <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                       <div className="flex items-center space-x-3">
                         <CpuChipIcon className="w-6 h-6 text-purple-400" />
                         <span className="text-white">Decentralized Registry</span>
                       </div>
                       <Badge variant="secondary">On-Chain</Badge>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                       <div className="flex items-center space-x-3">
                         <BoltIcon className="w-6 h-6 text-blue-400" />
                         <span className="text-white">Tool Discovery</span>
                       </div>
                       <Badge variant="secondary">P2P Network</Badge>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                       <div className="flex items-center space-x-3">
                         <LinkIcon className="w-6 h-6 text-green-400" />
                         <span className="text-white">Agent Integration</span>
                       </div>
                       <Badge variant="secondary">MCP Protocol</Badge>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24 bg-slate-900/20">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
                         <p className="text-xl text-gray-400 max-w-3xl mx-auto">
               Everything you need to build, deploy, and manage AI tools in a decentralized environment
             </p>
          </div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full group hover:bg-slate-900/70">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                                     <CardTitle className="text-white text-2xl">Secure Registry</CardTitle>
                   <CardDescription className="text-gray-400 text-base">
                     Cryptographically verified tool registration
                   </CardDescription>
                 </CardHeader>
                 <CardContent>
                   <p className="text-gray-300 leading-relaxed">
                     All AI tools are registered with cryptographic verification, ensuring authenticity 
                     and preventing malicious modifications. Every tool interaction is recorded 
                     immutably, creating a transparent audit trail.
                   </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full group hover:bg-slate-900/70">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BoltIcon className="w-8 h-8 text-white" />
                  </div>
                                     <CardTitle className="text-white text-2xl">Economic Incentives</CardTitle>
                   <CardDescription className="text-gray-400 text-base">
                     Built-in reward mechanisms for participation
                   </CardDescription>
                 </CardHeader>
                 <CardContent>
                   <p className="text-gray-300 leading-relaxed">
                     Tool operators and users are rewarded for contributing to the network. 
                     Stake tokens to participate in governance, earn fees from tool usage, 
                     and help secure the decentralized infrastructure.
                   </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-slate-900/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 h-full group hover:bg-slate-900/70">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ChartBarIcon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Usage Analytics</CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    Comprehensive tracking and metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                                     <p className="text-gray-300 leading-relaxed">
                     Comprehensive tracking of tool usage, ratings, and performance metrics. 
                     All data is publicly verifiable, providing transparency and trust 
                     for the entire decentralized ecosystem.
                   </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="container mx-auto px-6 py-24">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Development Roadmap</h2>
                         <p className="text-xl text-gray-400">Our journey to decentralize AI agent coordination</p>
          </div>
          
          <div className="space-y-8">
                         <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
             >
               <Card className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/10 border-yellow-500/30">
                 <CardContent className="p-8">
                   <div className="flex items-center space-x-4 mb-4">
                     <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                       <ClockIcon className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-semibold text-white">Phase 1: Core Infrastructure</h3>
                       <p className="text-yellow-400">🔄 In Development</p>
                     </div>
                   </div>
                   <p className="text-gray-300 ml-16">
                     Building the foundational decentralized registry system with smart contracts. 
                     Implementing core functionality for tool registration, discovery, and economic incentives.
                   </p>
                 </CardContent>
               </Card>
             </motion.div>

                         <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <Card className="bg-gradient-to-r from-slate-900/20 to-slate-800/10 border-slate-500/30">
                 <CardContent className="p-8">
                   <div className="flex items-center space-x-4 mb-4">
                     <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center">
                       <ClockIcon className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-semibold text-white">Phase 2: Agent Integration</h3>
                       <p className="text-slate-400">⏳ To Be Done</p>
                     </div>
                   </div>
                   <p className="text-gray-300 ml-16">
                     Build comprehensive APIs and SDKs for AI agent integration. 
                     Develop MCP protocol compatibility layer for seamless tool discovery and execution.
                   </p>
                 </CardContent>
               </Card>
             </motion.div>

                         <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               viewport={{ once: true }}
             >
               <Card className="bg-gradient-to-r from-slate-900/20 to-slate-800/10 border-slate-500/30">
                 <CardContent className="p-8">
                   <div className="flex items-center space-x-4 mb-4">
                     <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center">
                       <ClockIcon className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-semibold text-white">Phase 3: Network Launch</h3>
                       <p className="text-slate-400">⏳ To Be Done</p>
                     </div>
                   </div>
                   <p className="text-gray-300 ml-16">
                     Final testing, security audits, and multi-chain deployment preparation. 
                     Community onboarding, governance setup, and ecosystem expansion.
                   </p>
                 </CardContent>
               </Card>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="container mx-auto px-6 py-24">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="mb-6 text-purple-400 border-purple-400/50 text-lg px-4 py-2">
                  🚀 Coming Soon
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  The Future is Almost Here
                </h2>
                                 <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                   We're putting the finishing touches on the most advanced decentralized AI tool registry. 
                   Join our community to be the first to know when we launch!
                 </p>
                
                                 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                   <Button 
                     size="lg" 
                     className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
                     onClick={() => window.open('mailto:deeptanshu@eonxi.com?subject=MCPChain Interest&body=Hi, I am interested in learning more about MCPChain.', '_blank')}
                   >
                     <RocketLaunchIcon className="w-5 h-5 mr-2" />
                     Contact Us
                   </Button>
                   <Button 
                     variant="outline" 
                     size="lg" 
                     className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg"
                     onClick={() => window.open('https://github.com/EONXI-Studio/MCPChain', '_blank')}
                   >
                     <LinkIcon className="w-5 h-5 mr-2" />
                     View on GitHub
                   </Button>
                 </div>

                <Separator className="my-8 bg-slate-700" />
                
                                 <div className="text-sm text-gray-400">
                   <p>Built with ❤️ for Decentralization • Blockchain Agnostic • <a href="https://github.com/EONXI-Studio/MCPChain" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Open Source</a></p>
                 </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-bold text-white mb-4 md:mb-0">
              MCP<span className="text-purple-400">Chain</span>
            </div>
                         <div className="text-gray-400 text-sm">
               © 2024 MCPChain. Building the future of decentralized AI coordination.
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 