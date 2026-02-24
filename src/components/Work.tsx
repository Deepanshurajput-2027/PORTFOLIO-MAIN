import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { InfiniteGridBackground } from './ui/the-infinite-grid';
import { WorkCard } from './ui/WorkCard';

const Work = () => {
    const projects = [
        { title: "Roomify", category: "Fullstack App", imgUrl: "/projects/roomify.png", link: "https://github.com/deepanshurajput-2027/roomify" },
        { title: "Reciknow", category: "Web App", imgUrl: "/projects/reciknow.png", link: "https://github.com/deepanshurajput-2027/Reciknow" },
        { title: "Figma Clone", category: "Design Tool", imgUrl: "/projects/figma-clone.png", link: "https://github.com/deepanshurajput-2027/figma-clone" },
        { title: "WeatherPro", category: "Dashboard", imgUrl: "/projects/weatherpro.png", link: "https://github.com/deepanshurajput-2027/weatherPro" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="work" className="w-full relative">
            <InfiniteGridBackground className="section min-h-screen">
                <div className="container flex flex-col justify-center items-center relative z-10 w-full mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 text-center"
                    >
                        Selected Work
                        <span style={{ color: 'var(--accent-color, #eab308)' }}>.</span>
                    </motion.h2>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', width: '100%', maxWidth: '1200px', margin: '0 auto' }}
                    >
                        {projects.map((p, idx) => (
                            <WorkCard key={idx} title={p.title} category={p.category} imgUrl={p.imgUrl} link={p.link} itemVariant={item} />
                        ))}
                    </motion.div>
                </div>
            </InfiniteGridBackground>
        </section>
    );
};

export default Work;
