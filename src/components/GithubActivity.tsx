import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const GithubActivity = () => {
    return (
        <section style={{ padding: '8rem 5%', background: '#050505', color: '#fff' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                        {/* style={{
                       // fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '4rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em'
                    }}> */}
                        Open Source <span style={{ color: 'var(--text-secondary)' }}>Activity<span style={{ color: 'var(--accent-color, #eab308)' }}>.</span></span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            padding: '2rem',
                            border: '1px solid #222',
                            borderRadius: '24px',
                            background: '#0a0a0a',
                            maxWidth: '100%',
                            overflowX: 'auto',
                            width: 'fit-content',
                            marginTop: '4rem'
                        }}
                        className="github-container"
                    >
                        <GitHubCalendar
                            username="Deepanshurajput-2027"
                            blockSize={15}
                            blockMargin={5}
                            fontSize={16}
                            colorScheme="dark"
                            style={{ color: '#dadada' }}
                            renderBlock={(block, activity) =>
                                React.cloneElement(block, {
                                    'data-tooltip-id': 'github-tooltip',
                                    'data-tooltip-content': `${activity.count} contributions on ${activity.date}`,
                                })
                            }
                        />
                        <Tooltip id="github-tooltip" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "4px", padding: "4px 8px", fontSize: "12px" }} />
                    </motion.div>

                    <a href="https://github.com/Deepanshurajput-2027" target="_blank" rel="noopener noreferrer" style={{
                        marginTop: '3rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#fff',
                        borderBottom: '1px solid #333',
                        paddingBottom: '2px',
                        transition: 'all 0.3s'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--accent-color)';
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.borderColor = '#333';
                        }}
                    >
                        View Full Profile
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubActivity;
