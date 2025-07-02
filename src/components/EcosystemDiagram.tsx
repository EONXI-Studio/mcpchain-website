"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CircleStackIcon
} from "@heroicons/react/24/outline"

const EcosystemDiagram = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-96 flex items-center justify-center">
      {/* Central MCPChain Hub */}
      <motion.div
        className="absolute z-10"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-32 h-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-purple-400/50">
          <ShieldCheckIcon className="w-12 h-12 text-white mb-2" />
          <span className="text-white font-bold text-sm">MCPChain</span>
          <span className="text-purple-200 text-xs">Protocol</span>
        </div>
      </motion.div>

      {/* Blockchains */}
      <motion.div
        className="absolute top-8 left-8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
          <span className="text-white font-bold text-xs text-center">Ethereum</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-8 right-8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
          <span className="text-white font-bold text-xs text-center">Polygon</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
          <span className="text-white font-bold text-xs text-center">Avalanche</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
          <span className="text-white font-bold text-xs text-center">Arbitrum</span>
        </div>
      </motion.div>

      {/* AI Agents - Left Side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
        <motion.div
          className="mb-6 flex items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-600 mr-4">
            <CurrencyDollarIcon className="w-6 h-6 text-green-400 mb-1" />
            <span className="text-white text-xs font-medium">DeFi Bot</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-6 flex items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-600 mr-4">
            <ChartBarIcon className="w-6 h-6 text-blue-400 mb-1" />
            <span className="text-white text-xs font-medium">DAO Manager</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-6 flex items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-600 mr-4">
            <CircleStackIcon className="w-6 h-6 text-purple-400 mb-1" />
            <span className="text-white text-xs font-medium">Data Agent</span>
          </div>
        </motion.div>
      </div>

      {/* Tools - Right Side */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
        <motion.div
          className="mb-6 flex items-center flex-row-reverse"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-600 ml-4">
            <CloudIcon className="w-6 h-6 text-orange-400 mb-1" />
            <span className="text-white text-xs font-medium">Oracles</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-6 flex items-center flex-row-reverse"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-600 ml-4">
            <CircleStackIcon className="w-6 h-6 text-cyan-400 mb-1" />
            <span className="text-white text-xs font-medium">Storage</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-6 flex items-center flex-row-reverse"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex flex-col items-center justify-center border border-slate-600 ml-4">
            <CurrencyDollarIcon className="w-6 h-6 text-green-400 mb-1" />
            <span className="text-white text-xs font-medium">DeFi</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EcosystemDiagram 