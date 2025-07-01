"use client"

import { useState, useRef } from "react"
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  return (
    <div 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        preload="metadata"
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Custom Play/Pause Button */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-colors duration-200"
        >
          {isPlaying ? (
            <PauseIcon className="w-8 h-8 text-slate-900 ml-0" />
          ) : (
            <PlayIcon className="w-8 h-8 text-slate-900 ml-1" />
          )}
        </motion.button>
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none rounded-2xl"></div>
    </div>
  )
}