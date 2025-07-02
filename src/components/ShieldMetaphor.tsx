"use client"

import { motion } from "framer-motion"
import { ShieldCheckIcon, CheckCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline"

const ShieldMetaphor = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Main Shield */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-40 h-48 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 rounded-t-full rounded-b-lg shadow-2xl border-4 border-purple-300/50 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Shield Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          
          {/* Central Icon */}
          <ShieldCheckIcon className="w-16 h-16 text-white mb-4 z-10" />
          
          {/* MCPChain Text */}
          <div className="text-center z-10">
            <h3 className="text-white font-bold text-lg">MCPChain</h3>
            <p className="text-purple-200 text-sm">Trust Shield</p>
          </div>
          
          {/* Floating Security Elements */}
          <motion.div
            className="absolute top-4 left-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <LockClosedIcon className="w-6 h-6 text-purple-200" />
          </motion.div>
          
          <motion.div
            className="absolute top-6 right-6"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <CheckCircleIcon className="w-5 h-5 text-green-300" />
          </motion.div>
        </div>
        
        {/* Shield Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-purple-500/20 rounded-t-full rounded-b-lg blur-xl"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Security Features */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-500/30">
            <CheckCircleIcon className="w-6 h-6 text-green-400" />
          </div>
          <h4 className="text-white font-semibold text-sm">Verified</h4>
          <p className="text-gray-400 text-xs">All tools are cryptographically verified</p>
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-500/30">
            <LockClosedIcon className="w-6 h-6 text-blue-400" />
          </div>
          <h4 className="text-white font-semibold text-sm">Secured</h4>
          <p className="text-gray-400 text-xs">Blockchain-level security guarantees</p>
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-500/30">
            <ShieldCheckIcon className="w-6 h-6 text-purple-400" />
          </div>
          <h4 className="text-white font-semibold text-sm">Auditable</h4>
          <p className="text-gray-400 text-xs">Complete execution transparency</p>
        </motion.div>
      </div>
    </div>
  )
}

export default ShieldMetaphor 