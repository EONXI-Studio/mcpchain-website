"use client"

import { motion } from "framer-motion"
import { 
  RocketLaunchIcon,
  LinkIcon,
  CheckCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { VideoPlayer } from "@/components/VideoPlayer"
import BeforeAfterDiagram from "@/components/BeforeAfterDiagram"
import EcosystemDiagram from "@/components/EcosystemDiagram"
import ShieldMetaphor from "@/components/ShieldMetaphor"
import { 
  ShieldSecurityIcon,
  VerifiedShieldIcon,
  NetworkShieldIcon,
  AuditShieldIcon,
  RegistryShieldIcon,
  WarningIcon,
  SuccessIcon,
  AIAgentIcon,
  BlockchainIcon,
  ToolIcon,
  LightningIcon,
  BrokenChainIcon,
  CrackedShieldIcon,
  GlowingKeyIcon,
  BlackBoxIcon,
  DataOracleIcon,
  GovernanceIcon,
  GamingNFTIcon,
  EnterpriseIcon,
  CloudDataIcon,
  DataStreamViz
} from "@/components/ui/icons"

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

// Ecosystem-agnostic configuration for easy customization
const ecosystemConfig = {
  // Default: General Web3
  title: "Powering the Next Wave of Autonomous Applications",
  subtitle: "MCPChain is horizontal infrastructure that enables verifiable AI agents across every industry and use case",
  // For Avalanche grants, simply change to:
  // title: "Powering the Next Wave of Autonomous Applications on Avalanche",
  // subtitle: "MCPChain brings verifiable AI agents to the Avalanche ecosystem across DeFi, gaming, and enterprise applications",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-mcp-navy grid-background relative">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 glass-card"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display font-bold text-mcp-white">
              MCP<span className="text-electric animate-electric-glow">Chain</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-mcp-silver hover:text-electric transition-colors duration-200 font-medium">About</a>
              <a href="#features" className="text-mcp-silver hover:text-electric transition-colors duration-200 font-medium">Features</a>
              <a href="#roadmap" className="text-mcp-silver hover:text-electric transition-colors duration-200 font-medium">Roadmap</a>
              <a href="#coming-soon" className="text-mcp-silver hover:text-electric transition-colors duration-200 font-medium">Coming Soon</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center relative overflow-hidden">
        <motion.div 
          className="max-w-5xl mx-auto relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Badge variant="outline" className="mb-4 text-electric border-electric/50 bg-electric/10 glass-card">
              🚀 Decentralized AI Tool Registry
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-display font-bold text-mcp-white mb-8 leading-tight"
          >
            Your AI is a Black Box.
            <span className="text-electric animate-electric-glow">
              {" "}We Give You the Keys.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-mcp-silver mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            MCPChain is the verifiable execution layer that transforms risky AI actions into 
            provably secure, auditable transactions. The foundational trust layer for the autonomous economy.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col items-center gap-8"
          >
            {/* Dynamic Demo Visualization */}
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card-hover pulse-glow">
                <VideoPlayer 
                  src="/demo-video.mp4"
                  className="w-full h-full"
                />
                {/* Live Data Overlay */}
                {/* <div className="absolute inset-4 pointer-events-none">
                  <div className="glass-card p-3 rounded-lg mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2 text-electric">
                        <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                        <span className="data-stream font-mono">MCPChain Network Status: ACTIVE</span>
                      </div>
                      <div className="text-mcp-silver font-mono">
                        Block Height: 2,847,392
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0">
                    <DataStreamViz />
                  </div>
                  
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <div className="glass-card p-4 rounded-lg">
                      <div className="text-xs text-mcp-silver mb-2">Real-time Metrics</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-mcp-silver">Tools Verified:</span>
                          <span className="text-electric font-mono">1,247</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-mcp-silver">Active Agents:</span>
                          <span className="text-electric font-mono">3,891</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-mcp-silver">Success Rate:</span>
                          <span className="text-green-400 font-mono">99.7%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <p className="text-center text-mcp-silver mt-4">
                Live MCPChain Network Dashboard - 
                <span className="text-electric">Real Verifications in Progress</span>
              </p> */}
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="btn-premium text-lg px-8 py-6 text-mcp-navy font-bold"
                onClick={() => window.open('https://github.com/EONXI-Studio/MCPChain', '_blank')}
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      {/* <section className="container mx-auto px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { label: "Tools Registered", value: "1,247", icon: "🛠️" },
            { label: "AI Agents Active", value: "3,891", icon: "🤖" },
            { label: "Verifications Daily", value: "28.7K", icon: "✅" },
            { label: "Total Value Secured", value: "$2.4M", icon: "🔒" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card-hover rounded-2xl p-8 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-bold text-mcp-white mb-2 data-stream">
                {stat.value}
              </div>
              <div className="text-mcp-silver font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section> */}

      {/* Trust Crisis Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-display font-bold text-mcp-white mb-6"
            >
              The Trust Crisis in Autonomous AI
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-mcp-silver max-w-4xl mx-auto"
            >
              As AI agents become more autonomous, the stakes of unverifiable actions grow exponentially
            </motion.p>
          </motion.div>

          {/* Three Pillars Layout */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Pillar 1: Opaque Actions */}
            <motion.div variants={fadeInUp} className="glass-card-hover rounded-2xl p-8 text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-all duration-300">
                <BlackBoxIcon className="w-10 h-10 text-red-400" />
              </div>
              <Badge className="mb-4 bg-red-500/20 text-red-300 border-red-500/30">
                Critical Risk
              </Badge>
              <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                Opaque Actions
              </h3>
              <p className="text-mcp-silver leading-relaxed">
                AI operations are unauditable black boxes. When your trading bot loses $50K, 
                was it market volatility or a compromised algorithm?
              </p>
            </motion.div>

            {/* Pillar 2: Unvetted Tools */}
            <motion.div variants={fadeInUp} className="glass-card-hover rounded-2xl p-8 text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300">
                <CrackedShieldIcon className="w-10 h-10 text-orange-400" />
              </div>
              <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
                High Risk
              </Badge>
              <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                Unvetted Tools
              </h3>
              <p className="text-mcp-silver leading-relaxed">
                External tools can be insecure or malicious. One compromised API integration 
                can drain your entire treasury without a trace.
              </p>
            </motion.div>

            {/* Pillar 3: MCPChain Solution */}
            <motion.div variants={fadeInUp} className="glass-card-hover rounded-2xl p-8 text-center group pulse-glow">
              <div className="w-20 h-20 mx-auto mb-6 bg-electric/10 rounded-full flex items-center justify-center group-hover:bg-electric/20 transition-all duration-300">
                <GlowingKeyIcon className="w-10 h-10 text-electric" />
              </div>
              <Badge className="mb-4 bg-electric/20 text-electric border-electric/30">
                Solution
              </Badge>
              <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                Verifiable Execution
              </h3>
              <p className="text-mcp-silver leading-relaxed">
                MCPChain provides a universal verification protocol that makes every 
                AI action transparent, auditable, and provably secure.
              </p>
            </motion.div>
          </motion.div>

          {/* Central Vision Statement */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto pulse-glow"
          >
            <h3 className="text-3xl font-display font-bold text-mcp-white mb-4">
              The Vision: Trustless AI Infrastructure
            </h3>
            <p className="text-xl text-mcp-silver leading-relaxed">
              Every AI action becomes a cryptographically verifiable transaction. 
              Every tool interaction leaves an immutable audit trail. 
              Trust through transparency, not promises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Transformation Diagram */}
      <section className="container mx-auto px-6 py-24 relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <BeforeAfterDiagram />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24 relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-mcp-white mb-6">
              The Foundation of Trusted AI
            </h2>
            <p className="text-xl text-mcp-silver max-w-3xl mx-auto">
              Three pillars that transform AI from risk to reliable infrastructure
            </p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-card-hover h-full group">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-electric to-mcp-cyan-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 pulse-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <VerifiedShieldIcon className="w-8 h-8 text-mcp-navy" />
                  </motion.div>
                  <CardTitle className="text-mcp-white text-2xl font-display">The Verified Tool Marketplace</CardTitle>
                  <CardDescription className="text-mcp-silver text-base">
                    An on-chain directory where tool providers are economically staked
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-mcp-silver leading-relaxed">
                    Only high-quality, legitimate applications can connect with AI agents. Every tool 
                    provider must stake tokens and undergo verification, ensuring a curated ecosystem 
                    of trusted, battle-tested tools for autonomous systems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-card-hover h-full group">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-electric to-mcp-cyan-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 pulse-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <LightningIcon className="w-8 h-8 text-mcp-navy" />
                  </motion.div>
                  <CardTitle className="text-mcp-white text-2xl font-display">Economic Security & Accountability</CardTitle>
                  <CardDescription className="text-mcp-silver text-base">
                    Financial bonds that guarantee reliable behavior
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-mcp-silver leading-relaxed">
                    Tool providers post a financial bond on-chain. Malicious or faulty actions result 
                    in slashing, creating a powerful economic incentive for reliability and trust. 
                    This skin-in-the-game model ensures only serious, committed providers participate.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-card-hover h-full group">
                <CardHeader>
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-electric to-mcp-cyan-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 pulse-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <AuditShieldIcon className="w-8 h-8 text-mcp-navy" />
                  </motion.div>
                  <CardTitle className="text-mcp-white text-2xl font-display">Cryptographic Proof-of-Execution</CardTitle>
                  <CardDescription className="text-mcp-silver text-base">
                    Immutable, non-repudiable records for compliance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-mcp-silver leading-relaxed">
                    Every agent action is logged on-chain with a cryptographic attestation, creating 
                    an immutable, non-repudiable record for compliance, disputes, and forensic analysis. 
                    Perfect for enterprise and institutional use cases requiring full auditability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          {/* Ecosystem Diagram */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">
                Universal Ecosystem
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                MCPChain acts as the central hub connecting AI agents, blockchains, and tools in a unified ecosystem
              </p>
            </div>
            <EcosystemDiagram />
          </motion.div>
        </motion.div>
      </section>

      {/* Use Cases Section - Diverse Applications */}
      <section className="container mx-auto px-6 py-24 relative">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-mcp-white mb-6">
              {ecosystemConfig.title}
            </h2>
            <p className="text-xl text-mcp-silver max-w-4xl mx-auto">
              {ecosystemConfig.subtitle}
            </p>
          </motion.div>
          
          {/* Use Cases Grid */}
          <motion.div variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Use Case 1: Verifiable Oracles */}
            <motion.div
              variants={fadeInUp}
              className="group"
            >
              <Card className="glass-card-hover h-full group-hover:pulse-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-mcp-cyan-dark/20 rounded-2xl flex items-center justify-center border border-electric/30 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                      <DataOracleIcon className="w-8 h-8 text-electric" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                        Verifiable Oracles
                      </h3>
                      <p className="text-mcp-silver leading-relaxed text-lg mb-6">
                        Enable AI agents to fetch real-world data (prices, weather, sports scores) with 
                        <strong className="text-electric"> cryptographic proof</strong> that the data came from a trusted, registered source.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Real-time Data</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Price Feeds</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Weather APIs</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Use Case 2: Secure DAO Management */}
            <motion.div
              variants={fadeInUp}
              className="group"
            >
              <Card className="glass-card-hover h-full group-hover:pulse-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-mcp-cyan-dark/20 rounded-2xl flex items-center justify-center border border-electric/30 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                      <GovernanceIcon className="w-8 h-8 text-electric" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                        Secure DAO Management
                      </h3>
                      <p className="text-mcp-silver leading-relaxed text-lg mb-6">
                        Allow DAOs to use autonomous agents to execute passed proposals, manage treasuries, 
                        and perform administrative tasks with a <strong className="text-electric">complete on-chain audit trail</strong>.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Treasury Management</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Proposal Execution</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Governance</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Use Case 3: Trustworthy Gaming & NFTs */}
            <motion.div
              variants={fadeInUp}
              className="group"
            >
              <Card className="glass-card-hover h-full group-hover:pulse-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-mcp-cyan-dark/20 rounded-2xl flex items-center justify-center border border-electric/30 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                      <GamingNFTIcon className="w-8 h-8 text-electric" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                        Trustworthy Gaming & NFTs
                      </h3>
                      <p className="text-mcp-silver leading-relaxed text-lg mb-6">
                        Let agents perform in-game actions, manage NFT assets, and interact with metaverse economies 
                        with <strong className="text-electric">proven integrity</strong>, preventing fraud and exploits.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">In-Game Actions</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">NFT Management</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Metaverse</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Use Case 4: Enterprise Automation */}
            <motion.div
              variants={fadeInUp}
              className="group"
            >
              <Card className="glass-card-hover h-full group-hover:pulse-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-mcp-cyan-dark/20 rounded-2xl flex items-center justify-center border border-electric/30 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                      <EnterpriseIcon className="w-8 h-8 text-electric" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-mcp-white mb-4">
                        Enterprise Automation
                      </h3>
                      <p className="text-mcp-silver leading-relaxed text-lg mb-6">
                        Enable enterprise agents to automate workflows, handle compliance, and manage operations 
                        with <strong className="text-electric">full regulatory auditability</strong> and transparency.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Workflow Automation</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Compliance</Badge>
                        <Badge variant="outline" className="border-electric/30 text-electric bg-electric/5">Operations</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Infrastructure Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-mcp-slate/50 to-electric/10 rounded-3xl p-12 border border-electric/30 glow-electric max-w-5xl mx-auto">
              <h4 className="text-3xl font-display font-bold text-mcp-white mb-6">
                Universal Infrastructure, Unlimited Applications
              </h4>
              <p className="text-xl text-mcp-silver leading-relaxed mb-8">
                MCPChain isn't just for financial applications. We're building the <strong className="text-electric">foundational trust layer</strong> 
                that enables verifiable AI agents across every industry, use case, and blockchain.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-display font-bold text-electric mb-2">∞</div>
                  <div className="text-mcp-silver">Unlimited Use Cases</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-electric mb-2">🔗</div>
                  <div className="text-mcp-silver">Cross-Chain Compatible</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-electric mb-2">🏢</div>
                  <div className="text-mcp-silver">Enterprise Ready</div>
                </div>
              </div>
            </div>
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
                     Develop MCP compatibility layer for seamless tool discovery and execution.
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
                  Ready to Build the Autonomous Economy?
                </h2>
                                 <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                   MCPChain is launching soon. Be among the first to deploy AI agents with enterprise-grade 
                   security and verifiable execution. The future of autonomous systems starts here.
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
               © 2025 MCPChain. Building the future of decentralized AI coordination.
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 