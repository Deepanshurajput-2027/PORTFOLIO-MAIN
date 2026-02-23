
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const techs = [
    { name: 'C', slug: 'c' },
    { name: 'C++', slug: 'cplusplus' },
    { name: 'HTML5', slug: 'html5' },

    { name: 'CSS', slug: 'css' },
    { name: 'Sass', slug: 'sass' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'React', slug: 'react' },
    { name: 'Tailwind', slug: 'tailwindcss' },
    { name: 'Express', slug: 'express' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'Vite', slug: 'vite' },
    { name: 'ESLint', slug: 'eslint' },
    { name: 'VS Code', slug: 'visualstudiocode', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
    { name: 'Git', slug: 'git' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Figma', slug: 'figma' },
    { name: 'Webflow', slug: 'webflow' },
    { name: 'Framer', slug: 'framer' }
];

const TechStack = () => {
    return (
        <section id="tech" style={{ padding: '4rem 5%', background: '#050505' }}>
            <div style={{
                background: 'var(--accent-color)',
                color: 'var(--text-on-accent)',
                borderRadius: '32px',
                padding: '4rem 0',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                        fontSize: '0.875rem',
                        marginBottom: '3rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 700,
                        padding: '0 2rem'
                    }}
                >
                    My Toolkit
                </motion.p>

                {/* Marquee Container */}
                <div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25
                        }}
                        style={{ display: 'flex', gap: '4rem', paddingLeft: '4rem', whiteSpace: 'nowrap', alignItems: 'center' }}
                    >
                        {/* Render list twice for seamless loop */}
                        {[...techs, ...techs].map((tech, idx) => (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} className="tech-item">
                                <img
                                    src={tech.imgUrl || `https://cdn.simpleicons.org/${tech.slug}/000000`}
                                    alt={tech.name}
                                    width={40}
                                    height={40}
                                    style={{ display: 'block', filter: 'brightness(0)' }}
                                />
                                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{tech.name}</span>
                            </div>
                        ))}

                        {/* Manual additions for non-simple-icons */}
                        {[1, 2].map((_, idx) => (
                            <div key={`custom-${idx}`} style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} className="tech-item">
                                    <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                                        <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z" /><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="m2 2 7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Cursor</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }} className="tech-item">
                                    <Rocket size={40} color="#000" />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Antigravity</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
