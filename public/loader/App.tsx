import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, RotateCcw, Palette } from 'lucide-react';

const Monogram = ({ variant, animationKey, designStyle, svgRef }: { variant: 'primary' | 'alternative' | 'structural' | 'continuous' | 'minimal', animationKey: number, designStyle: 'bauhaus' | 'sketch', svgRef: React.RefObject<SVGSVGElement | null> }) => {
  const isSketch = designStyle === 'sketch';
  const filterUrl = isSketch ? 'url(#sketch-filter)' : undefined;

  return (
    <svg ref={svgRef} width="240" height="240" viewBox="0 0 240 240" className="overflow-visible" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="sketch-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      
      {variant === 'primary' ? (
        <g key={`primary-${animationKey}`} filter={filterUrl}>
          {/* M - Left Triangle */}
          <motion.polygon
            points="40,200 80,80 120,200"
            fill="#9CA3AF"
            stroke="#9CA3AF"
            strokeWidth="12"
            strokeLinejoin="round"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "bottom" }}
            animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
          
          {/* M - Right Triangle */}
          <motion.polygon
            points="100,200 140,80 180,200"
            fill="#4B5563"
            stroke="#4B5563"
            strokeWidth="12"
            strokeLinejoin="round"
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "bottom" }}
            animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.2, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Q - Circle */}
          <motion.circle
            cx="140"
            cy="130"
            r="50"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="16"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: [0, 1, 1, 0], rotate: [-90, 0, 0, 90] }}
            transition={{ duration: 3, delay: 0.4, ease: "easeInOut", repeat: Infinity }}
          />

          {/* Q - Tail */}
          <motion.line
            x1="170"
            y1="160"
            x2="210"
            y2="200"
            stroke="#1F2937"
            strokeWidth="16"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.8, ease: "easeInOut", repeat: Infinity }}
          />
        </g>
      ) : variant === 'alternative' ? (
        <g key={`alternative-${animationKey}`} filter={filterUrl}>
          {/* M - Left Rect */}
          <motion.rect
            x="40"
            y="80"
            width="24"
            height="120"
            rx="12"
            fill="#9CA3AF"
            initial={{ height: 0, y: 200 }}
            animate={{ height: [0, 120, 120, 0], y: [200, 80, 80, 200] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
          
          {/* M - Right Rect */}
          <motion.rect
            x="116"
            y="80"
            width="24"
            height="120"
            rx="12"
            fill="#9CA3AF"
            initial={{ height: 0, y: 200 }}
            animate={{ height: [0, 120, 120, 0], y: [200, 80, 80, 200] }}
            transition={{ duration: 3, delay: 0.2, ease: "easeInOut", repeat: Infinity }}
          />

          {/* M - Center Triangle */}
          <motion.polygon
            points="52,80 128,80 90,150"
            fill="#4B5563"
            stroke="#4B5563"
            strokeWidth="12"
            strokeLinejoin="round"
            initial={{ scale: 0, transformOrigin: "center" }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.4, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Q - Square Outline */}
          <motion.rect
            x="90"
            y="90"
            width="100"
            height="100"
            rx="24"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="16"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.6, ease: "easeInOut", repeat: Infinity }}
          />

          {/* Q - Tail Square */}
          <motion.rect
            x="170"
            y="170"
            width="30"
            height="30"
            rx="10"
            fill="#1F2937"
            initial={{ scale: 0, transformOrigin: "center" }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 1.0, ease: "easeInOut", repeat: Infinity }}
          />
        </g>
      ) : variant === 'structural' ? (
        <g key={`structural-${animationKey}`} filter={filterUrl}>
          {/* M - Heavy Architectural Lines */}
          <motion.polyline
            points="40,200 40,60 100,120 160,60 160,200"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="28"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0, x: -40, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], x: [-40, 0, 0, 40], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Q - Enhanced Heavy Shape */}
          <motion.path
            d="M 100 80 h 60 a 20 20 0 0 1 20 20 v 60 a 20 20 0 0 1 -20 20 h -60 a 20 20 0 0 1 -20 -20 v -60 a 20 20 0 0 1 20 -20 z"
            fill="none"
            stroke="#4B5563"
            strokeWidth="28"
            strokeLinejoin="round"
            initial={{ pathLength: 0, x: 40, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], x: [40, 0, 0, -40], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Q - Tail */}
          <motion.line
            x1="150"
            y1="150"
            x2="220"
            y2="220"
            stroke="#D1D5DB"
            strokeWidth="28"
            strokeLinecap="round"
            initial={{ pathLength: 0, x: 40, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], x: [40, 0, 0, -40], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: 3, delay: 0.2, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: 'multiply' }}
          />
        </g>
      ) : variant === 'continuous' ? (
        <g key={`continuous-${animationKey}`} filter={filterUrl}>
          {/* Continuous Path */}
          <motion.path
            d="M 40 200 L 40 80 L 100 140 L 160 80 L 160 140 A 35 35 0 0 0 150 140 L 190 180"
            fill="none"
            stroke="#4B5563"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], pathOffset: [0, 0, 1, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
        </g>
      ) : (
        <g key={`minimal-${animationKey}`} filter={filterUrl}>
          {/* Minimal M */}
          <motion.path
            d="M 40 180 V 100 A 35 35 0 0 1 110 100 V 180 M 110 120 A 35 35 0 0 1 180 120 V 180"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
          {/* Minimal Q */}
          <motion.path
            d="M 180 140 A 40 40 0 1 0 180 60 A 40 40 0 0 0 180 140 Z M 220 100 V 210"
            fill="none"
            stroke="#4B5563"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 3, delay: 0.3, ease: "easeInOut", repeat: Infinity }}
            style={{ mixBlendMode: 'multiply' }}
          />
        </g>
      )}
    </svg>
  );
};

function MainApp() {
  const [variant, setVariant] = useState<'primary' | 'alternative' | 'structural' | 'continuous' | 'minimal'>('primary');
  const [designStyle, setDesignStyle] = useState<'bauhaus' | 'sketch'>('bauhaus');
  const [animationKey, setAnimationKey] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleReplay = () => {
    setAnimationKey(prev => prev + 1);
  };

  const handleSaveSVG = () => {
    if (!svgRef.current) return;
    
    // Clone the SVG to remove animation attributes for a clean export
    const svgClone = svgRef.current.cloneNode(true) as SVGSVGElement;
    
    // Serialize the exact current state of the SVG DOM node
    const svgString = new XMLSerializer().serializeToString(svgClone);
    
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `monogram-${variant}-${designStyle}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-zinc-900 font-sans p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Monogram Display */}
        <div className="flex flex-col items-center justify-center bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-zinc-100 min-h-[500px] relative">
          <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
            <h2 className="text-2xl font-medium text-zinc-400 uppercase text-sm tracking-widest">Loading Indicators</h2>
            <div className="flex gap-2 items-center">
              <div className="relative mr-4">
                <select
                  value={designStyle}
                  onChange={(e) => setDesignStyle(e.target.value as 'bauhaus' | 'sketch')}
                  className="appearance-none bg-zinc-50 border border-zinc-200 text-zinc-700 py-2 pl-4 pr-10 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  <option value="bauhaus">Bauhaus Style</option>
                  <option value="sketch">Sketch Style</option>
                </select>
                <Palette className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <button 
                onClick={handleReplay}
                className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
                title="Replay Animation"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button 
                onClick={handleSaveSVG}
                className="p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
                title="Save as SVG"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <Monogram variant={variant} animationKey={animationKey} designStyle={designStyle} svgRef={svgRef} />
          
          <div className="absolute bottom-8 flex bg-zinc-100 p-1 rounded-xl flex-wrap justify-center gap-1">
            <button 
              onClick={() => { setVariant('primary'); setAnimationKey(prev => prev + 1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${variant === 'primary' ? 'bg-white shadow-sm text-black' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Primary
            </button>
            <button 
              onClick={() => { setVariant('alternative'); setAnimationKey(prev => prev + 1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${variant === 'alternative' ? 'bg-white shadow-sm text-black' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Alternative
            </button>
            <button 
              onClick={() => { setVariant('structural'); setAnimationKey(prev => prev + 1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${variant === 'structural' ? 'bg-white shadow-sm text-black' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Structural
            </button>
            <button 
              onClick={() => { setVariant('continuous'); setAnimationKey(prev => prev + 1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${variant === 'continuous' ? 'bg-white shadow-sm text-black' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Continuous
            </button>
            <button 
              onClick={() => { setVariant('minimal'); setAnimationKey(prev => prev + 1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${variant === 'minimal' ? 'bg-white shadow-sm text-black' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              Minimal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <MainApp />;
}
