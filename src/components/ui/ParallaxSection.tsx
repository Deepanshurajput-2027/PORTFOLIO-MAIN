import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Sync Lenis perfectly with GSAP ticker for true buttery smoothness
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
        };
    }, []);

    return <>{children}</>;
};

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number; // Parallax speed factor
    id?: string;
}

const ParallaxSection = ({ children, className = "", speed = 0.5, id }: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Calculate dynamic transform based on speed prop
    // We start at negative offset (move up) and end at positive offset (move down) relative to natural scroll
    // speed 0.5 -> -10% to 10%
    const yRange = [
        `${-20 * speed}%`,
        `${20 * speed}%`
    ];

    const y = useTransform(scrollYProgress, [0, 1], yRange);

    return (
        <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
            <motion.div
                style={{
                    y,
                    z: 0,
                    willChange: "transform"
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default ParallaxSection;
