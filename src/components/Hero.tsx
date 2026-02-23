import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import { ShimmerButton } from './ui/ShimmerButton';
import { NeonRaymarcher } from './ui/neon-raymarcher';
import { FileText } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-start px-[5%] overflow-hidden bg-background">


            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            {/* Right side background atmosphere */}
            <div className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0 pointer-events-none opacity-60 mix-blend-screen overflow-hidden">
                <NeonRaymarcher />
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

            {/* Top gradient for smooth transition from navbar */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-0 pointer-events-none" />

            {/* Content Glow Spot */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[40vw] h-[40vw] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen" />

            {/* Content */}
            <div style={{ zIndex: 1, position: 'relative', maxWidth: '80%', pointerEvents: 'none' }} className="mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-white select-none pointer-events-none drop-shadow-2xl"
                    style={{
                        fontSize: 'clamp(4rem, 11vw, 8rem)', // Slightly tuned for better balance
                        margin: 0,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em', // Slightly less tight
                        textTransform: 'uppercase',
                        position: 'relative'
                    }}>
                    CREATIVE<br /> WEB <br />
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="font-heading italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
                        style={{
                            fontSize: '0.85em', // Optically adjusted to match width of other lines
                            display: 'inline-block',
                            position: 'relative',
                            paddingRight: '0.2em' // Slight spacing for italic overflow
                        }}>
                        DEVELOPER.
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-gray-300 max-w-xl mt-6 mb-10 text-lg md:text-xl leading-relaxed ml-1 font-light tracking-wide drop-shadow-md pointer-events-auto"
                >
                    Hi, I'm Deepanshu.—I engineer immersive, high-performance web experiences bridging the gap between bold design and complex functionality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', pointerEvents: 'auto' }}
                >
                    <ShimmerButton text="VIEW MY WORK" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} />

                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b border-transparent hover:border-yellow-500 pb-0.5 text-sm uppercase tracking-widest text-white/80 hover:text-white transition-all group">
                        <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-yellow-500/80 transition-colors">
                            <FileText size={14} className="group-hover:text-yellow-500 transition-colors" />
                        </span>
                        Resume
                    </a>

                    <a href="https://github.com/deepanshurajput-2027" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b border-transparent hover:border-yellow-500 pb-0.5 text-sm uppercase tracking-widest text-white/80 hover:text-white transition-all group">
                        <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-yellow-500/80 transition-colors">
                            <svg className="group-hover:text-yellow-500 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </span>
                        GitHub
                    </a>

                    <a href="https://linkedin.com/in/deepanshurajput2731" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b border-transparent hover:border-yellow-500 pb-0.5 text-sm uppercase tracking-widest text-white/80 hover:text-white transition-all group">
                        <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-yellow-500/80 transition-colors">
                            <svg className="group-hover:text-yellow-500 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                            </svg>
                        </span>
                        LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
