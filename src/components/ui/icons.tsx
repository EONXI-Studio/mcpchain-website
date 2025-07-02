import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Shield-based Security Icon
export const ShieldSecurityIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <path
      d="M9 12L11 14L16 9"
      stroke="#00f5ff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Shield with Verification Checkmark
export const VerifiedShieldIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.15)"
    />
    <circle cx="12" cy="12" r="3" fill="#00f5ff" />
    <path
      d="M10.5 12L11.5 13L13.5 11"
      stroke="#0a0e1a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Network/Connection Shield
export const NetworkShieldIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <circle cx="8" cy="10" r="1.5" fill="#00f5ff" />
    <circle cx="16" cy="10" r="1.5" fill="#00f5ff" />
    <circle cx="12" cy="14" r="1.5" fill="#00f5ff" />
    <path d="M8 10L12 14M16 10L12 14" stroke="#00f5ff" strokeWidth="1.5" />
  </svg>
);

// Audit/Analytics Shield
export const AuditShieldIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <path
      d="M8 12L10 14L12 12L14 15L16 11"
      stroke="#00f5ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Registry/Database Shield
export const RegistryShieldIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <rect x="8" y="9" width="8" height="1.5" rx="0.75" fill="#00f5ff" />
    <rect x="8" y="11.5" width="6" height="1.5" rx="0.75" fill="#00f5ff" />
    <rect x="8" y="14" width="7" height="1.5" rx="0.75" fill="#00f5ff" />
  </svg>
);

// Warning/Alert Icon (for "Before" state)
export const WarningIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L22 20H2L12 2Z"
      stroke="#ff6b6b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(255, 107, 107, 0.1)"
    />
    <path d="M12 9V13" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17H12.01" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Success/Check Icon (for "After" state)
export const SuccessIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#00f5ff"
      strokeWidth="2"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <path
      d="M8 12L11 15L16 9"
      stroke="#00f5ff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// AI Agent Icon
export const AIAgentIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Blockchain/Link Icon
export const BlockchainIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <path d="M9 6H15" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 18H15" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 9V15" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 9V15" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Tool/Wrench Icon
export const ToolIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M14.7 6.3A1 1 0 0 0 13 5H9A1 1 0 0 0 8.3 6.3L6.3 8.3A1 1 0 0 0 6 9V13A1 1 0 0 0 6.3 13.7L8.3 15.7A1 1 0 0 0 9 16H13A1 1 0 0 0 13.7 15.7L15.7 13.7A1 1 0 0 0 16 13V9A1 1 0 0 0 15.7 8.3L14.7 6.3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <circle cx="11" cy="11" r="2" stroke="#00f5ff" strokeWidth="2" fill="#00f5ff" />
  </svg>
);

// Lightning/Energy Icon (for performance/speed)
export const LightningIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
  </svg>
);

// Broken Chain Icon (for "Opaque Actions")
export const BrokenChainIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 12L11 14L15 10"
      stroke="#ff6b6b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
    />
    <rect x="2" y="9" width="5" height="6" rx="2" stroke="#ff6b6b" strokeWidth="2" fill="rgba(255, 107, 107, 0.1)" />
    <rect x="17" y="9" width="5" height="6" rx="2" stroke="#ff6b6b" strokeWidth="2" fill="rgba(255, 107, 107, 0.1)" />
    <path d="M7 12H9" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 12H17" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="#ff6b6b" />
  </svg>
);

// Cracked Shield Icon (for "Unvetted Tools")
export const CrackedShieldIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L3 7V13C3 17.55 6.84 21.74 12 23C17.16 21.74 21 17.55 21 13V7L12 2Z"
      stroke="#ff6b6b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(255, 107, 107, 0.1)"
    />
    {/* Crack lines */}
    <path d="M12 8L10 12L12 16" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 8L14 11L12 14" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1" fill="#ff6b6b" />
  </svg>
);

// Glowing Key Icon (for "Verifiable Execution")
export const GlowingKeyIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle 
      cx="8" 
      cy="8" 
      r="4" 
      stroke="#00f5ff" 
      strokeWidth="2" 
      fill="rgba(0, 245, 255, 0.1)"
    />
    <circle cx="8" cy="8" r="2" fill="#00f5ff" />
    <path 
      d="M12 12L20 20" 
      stroke="#00f5ff" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M16 16L18 14" 
      stroke="#00f5ff" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M18 18L20 16" 
      stroke="#00f5ff" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
  </svg>
);

// Black Box Icon (alternative for "Opaque Actions")
export const BlackBoxIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect 
      x="4" 
      y="4" 
      width="16" 
      height="16" 
      rx="2" 
      stroke="#ff6b6b" 
      strokeWidth="2" 
      fill="rgba(0, 0, 0, 0.8)"
    />
    <path d="M8 8H16" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M8 12H16" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M8 16H16" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="18" cy="6" r="2" fill="#ff6b6b" />
    <path d="M17 5L19 7" stroke="white" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Data/Oracle Icon (for "Verifiable Oracles")
export const DataOracleIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="#00f5ff" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="8" y="8" width="8" height="8" rx="1" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0, 245, 255, 0.2)" />
    <circle cx="12" cy="12" r="1" fill="#00f5ff" />
  </svg>
);

// Governance/DAO Icon (for "Secure DAO Management")
export const GovernanceIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="4" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <path d="M8 9L10 11L16 5" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="21" r="1" fill="#00f5ff" />
    <circle cx="12" cy="21" r="1" fill="#00f5ff" />
    <circle cx="17" cy="21" r="1" fill="#00f5ff" />
    <path d="M7 19V21" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 19V21" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 19V21" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Gaming/NFT Icon (for "Trustworthy Gaming & NFTs")
export const GamingNFTIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <circle cx="8" cy="10" r="1.5" fill="#00f5ff" />
    <circle cx="16" cy="10" r="1.5" fill="#00f5ff" />
    <path d="M12 7V13" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 10H15" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 17L8 19L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 17L16 19L18 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="10" y="19" width="4" height="2" rx="1" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.2)" />
  </svg>
);

// Enterprise/Factory Icon (for "Enterprise Automation")
export const EnterpriseIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(0, 245, 255, 0.1)" />
    <path d="M8 7H16" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 11H16" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 15H12" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="15" r="2" stroke="#00f5ff" strokeWidth="2" fill="rgba(0, 245, 255, 0.2)" />
    <path d="M16 14L18 16" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="14" y="17" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(0, 245, 255, 0.1)" />
  </svg>
);

// Cloud/Data Icon (alternative for oracles)
export const CloudDataIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path 
      d="M18 10H19.5C20.881 10 22 11.119 22 12.5S20.881 15 19.5 15H6.5C4.567 15 3 13.433 3 11.5C3 9.567 4.567 8 6.5 8C6.5 5.791 8.291 4 10.5 4C12.709 4 14.5 5.791 14.5 8H18C19.105 8 20 8.895 20 10Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="rgba(0, 245, 255, 0.1)"
    />
    <path d="M8 18L10 16L12 18L14 16L16 18" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="1.5" fill="#00f5ff" />
  </svg>
);

// Dynamic Blockchain Background Component
export const BlockchainBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static Grid - No Movement */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Floating Nodes - Constrained Movement */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-electric rounded-full opacity-30"
          style={{
            left: `${15 + (i * 6) % 70}%`,
            top: `${20 + (i * 7) % 60}%`,
            animation: `node-pulse ${3 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
      
      {/* Static Plexus Orbs - No Movement */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric/3 rounded-full blur-xl opacity-60" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-electric/2 rounded-full blur-xl opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-electric/2 rounded-full blur-xl opacity-50" />
    </div>
  )
}

// Data Stream Visualization Component
export const DataStreamViz = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden rounded-lg glass-card">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-xs text-electric font-mono opacity-60">
          [LIVE AUDIT TRAIL]
        </div>
      </div>
      
      {/* Streaming Data Lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-electric to-transparent"
          style={{
            top: `${20 + i * 10}%`,
            width: '100%',
            left: '-100%',
            animation: `data-flow ${2 + i * 0.3}s linear infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      
      {/* Transaction Blocks */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="flex space-x-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-electric/60 rounded-sm"
              style={{
                animation: `pulse 1s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const IconComponents = {
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
  BlockchainBackground,
  DataStreamViz,
}; 