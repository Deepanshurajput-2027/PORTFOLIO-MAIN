import { motion } from 'framer-motion';
import { InfiniteGridBackground } from './ui/the-infinite-grid';

const Work = () => {
    const projects = [
        { title: "Neon Finance", category: "Fintech" },
        { title: "Orbital UI", category: "Design System" },
        { title: "Phantom", category: "E-commerce" },
        { title: "Nexus", category: "Dashboard" }
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

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
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
                        // style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '4rem', textTransform: 'uppercase' }}
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
                            <motion.div key={idx} variants={item} className="work-card">
                                <div className="work-card-img" style={{
                                    background: '#111',
                                    borderRadius: '24px',
                                    border: '1px solid #222'
                                }}>
                                    {p.title.substring(0, 2).toUpperCase()}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{p.title}</h3>
                                    <span style={{
                                        border: '1px solid #333',
                                        padding: '0.2rem 0.8rem',
                                        borderRadius: '20px',
                                        fontSize: '0.8rem',
                                        color: '#888',
                                        textTransform: 'uppercase'
                                    }}>
                                        {p.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </InfiniteGridBackground>
        </section>
    );
};

export default Work;
