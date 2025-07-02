"use client"

import { motion } from "framer-motion"
import { 
  ExclamationTriangleIcon, 
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  LockClosedIcon,
  CpuChipIcon,
  DocumentIcon,
  ChartBarIcon,
  CircleStackIcon
} from "@heroicons/react/24/outline"
import { Card, CardContent } from "@/components/ui/card"

const BeforeAfterDiagram = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h3 className="text-5xl font-bold text-white mb-4">
          From a Black Box to a Verifiable Protocol
        </h3>
        <p className="text-xl text-gray-400">
          See the transformation from chaos to order, risk to security
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* BEFORE: The Black Box Problem */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-red-950/40 via-red-900/30 to-orange-900/40 border-red-500/40 min-h-[500px] relative overflow-hidden">
            {/* Danger Overlay */}
            <div className="absolute inset-0 bg-red-900/10 backdrop-blur-[1px]" />
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold text-red-400 mb-2">The Black Box Problem</h4>
                <p className="text-red-300/80 text-sm">Before MCPChain</p>
              </div>
              
              <div className="relative h-80">
                {/* AI Agent - Left Side */}
                <motion.div 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg border-2 border-blue-400/50">
                      <CpuChipIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <ExclamationTriangleIcon className="w-6 h-6 text-red-400 animate-pulse" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-white text-xs font-semibold">AI Agent</span>
                    </div>
                  </div>
                </motion.div>

                {/* Chaotic Spaghetti Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320" style={{ zIndex: 1 }}>
                  {/* Tangled, chaotic paths */}
                  <motion.path
                    d="M 80 160 Q 120 100 180 140 Q 220 180 280 120 Q 320 80 360 100"
                    stroke="#dc2626"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8,4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.path
                    d="M 80 160 Q 140 200 200 160 Q 260 120 320 180 Q 340 200 360 160"
                    stroke="#dc2626"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 2.2, delay: 1.2 }}
                  />
                  <motion.path
                    d="M 80 160 Q 100 240 160 200 Q 200 240 240 200 Q 280 160 360 220"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 2.4, delay: 1.4 }}
                  />
                  <motion.path
                    d="M 80 160 Q 160 80 240 120 Q 300 140 340 100"
                    stroke="#6b7280"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2.6, delay: 1.6 }}
                  />
                  {/* Failed connection - trails off */}
                  <motion.path
                    d="M 80 160 Q 140 120 200 100 Q 250 80 300 60"
                    stroke="#6b7280"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="3,3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 0.7, opacity: 0.3 }}
                    transition={{ duration: 1.8, delay: 1.8 }}
                  />
                </svg>

                {/* Unverified Tools - Right Side */}
                <div className="absolute right-4 top-0 h-full flex flex-col justify-center space-y-6 z-10">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                      <span className="text-gray-300 text-xs font-bold">&lt;/&gt;</span>
                    </div>
                    <QuestionMarkCircleIcon className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-bounce" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">Unverified API</span>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                      <DocumentIcon className="w-6 h-6 text-gray-300" />
                    </div>
                    <ExclamationTriangleIcon className="absolute -top-1 -right-1 w-5 h-5 text-red-400 animate-pulse" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">Unknown Contract</span>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                      <ChartBarIcon className="w-6 h-6 text-gray-300" />
                    </div>
                    <QuestionMarkCircleIcon className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-bounce" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">Risky DeFi</span>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                  >
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                      <CircleStackIcon className="w-6 h-6 text-gray-300" />
                    </div>
                    <ExclamationTriangleIcon className="absolute -top-1 -right-1 w-5 h-5 text-red-400 animate-pulse" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">Unknown Source</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="text-center mt-8 space-y-2">
                <p className="text-red-300 text-sm font-medium flex items-center justify-center">
                  <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
                  No Verification • Security Risks • Failed Integrations
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AFTER: Verifiable & Secure Execution */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-green-950/40 via-emerald-900/30 to-green-900/40 border-green-500/40 min-h-[500px] relative overflow-hidden">
            {/* Success Overlay */}
            <div className="absolute inset-0 bg-green-900/10 backdrop-blur-[1px]" />
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold text-green-400 mb-2">Verifiable & Secure Execution</h4>
                <p className="text-green-300/80 text-sm">With MCPChain</p>
              </div>
              
              <div className="relative h-80">
                {/* AI Agent - Left Side (Same as before) */}
                <motion.div 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg border-2 border-blue-400/50">
                      <CpuChipIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-white text-xs font-semibold">AI Agent</span>
                    </div>
                  </div>
                </motion.div>

                {/* MCPChain Shield - Center */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  whileHover={{ scale: 1.1 }}
                  title="All interactions are verified on-chain via the MCPChain protocol"
                >
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-purple-400/60">
                      <ShieldCheckIcon className="w-12 h-12 text-white" />
                    </div>
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/30 rounded-3xl blur-lg"
                      animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <span className="text-purple-400 text-sm font-bold">MCPChain</span>
                    </div>
                  </div>
                </motion.div>

                {/* Clean Superhighway Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320" style={{ zIndex: 1 }}>
                  {/* Clean line from AI to Shield */}
                  <motion.path
                    d="M 80 160 L 200 160"
                    stroke="#a855f7"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                  />
                  
                  {/* Clean lines from Shield to Tools */}
                  <motion.path
                    d="M 200 160 L 320 100"
                    stroke="#a855f7"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                  />
                  <motion.path
                    d="M 200 160 L 320 140"
                    stroke="#a855f7"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 2.7 }}
                  />
                  <motion.path
                    d="M 200 160 L 320 180"
                    stroke="#a855f7"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 2.9 }}
                  />
                  <motion.path
                    d="M 200 160 L 320 220"
                    stroke="#a855f7"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 3.1 }}
                  />
                </svg>

                {/* Verified Tools - Right Side */}
                <div className="absolute right-4 top-0 h-full flex flex-col justify-center space-y-6 z-10">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.5 }}
                    whileHover={{ scale: 1.1 }}
                    title="Tool provider is staked and vetted by the registry"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center border-2 border-green-400/50 shadow-lg">
                      <span className="text-white text-xs font-bold">&lt;/&gt;</span>
                    </div>
                    <CheckCircleIcon className="absolute -top-1 -right-1 w-5 h-5 text-green-400" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-300 whitespace-nowrap">Verified API</span>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.7 }}
                    whileHover={{ scale: 1.1 }}
                    title="Smart contract audited and verified on-chain"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center border-2 border-green-400/50 shadow-lg">
                      <DocumentIcon className="w-6 h-6 text-white" />
                    </div>
                    <LockClosedIcon className="absolute -top-1 -right-1 w-5 h-5 text-blue-400" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-300 whitespace-nowrap">Audited Contract</span>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.9 }}
                    whileHover={{ scale: 1.1 }}
                    title="DeFi protocol secured through MCPChain verification"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center border-2 border-green-400/50 shadow-lg">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <CheckCircleIcon className="absolute -top-1 -right-1 w-5 h-5 text-green-400" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-300 whitespace-nowrap">Secured DeFi Tool</span>
                  </motion.div>
                  
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.1 }}
                    whileHover={{ scale: 1.1 }}
                    title="Data storage provider verified and encrypted"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center border-2 border-green-400/50 shadow-lg">
                      <CircleStackIcon className="w-6 h-6 text-white" />
                    </div>
                    <LockClosedIcon className="absolute -top-1 -right-1 w-5 h-5 text-blue-400" />
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-300 whitespace-nowrap">Trusted Storage</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="text-center mt-8 space-y-2">
                <p className="text-green-300 text-sm font-medium flex items-center justify-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  On-Chain Verification • Cryptographic Security • Standardized Protocol
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default BeforeAfterDiagram 