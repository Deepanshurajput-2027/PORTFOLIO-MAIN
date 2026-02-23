import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2rem 5%',
                position: 'relative',
                zIndex: 100
            }}
        >
            <div>
                <a href="/" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#fff', textDecoration: 'none', letterSpacing: '0.1em' }}>
                    DevByte.
                </a>
            </div>
            <ul style={{
                display: 'flex',
                gap: '3rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                alignItems: 'center'
            }}>
                <li className="nav-item"><a href="#services" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 500 }}>SERVICES</a></li>
                <li className="nav-item"><a href="#certificates" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 500 }}>CERTIFICATIONS</a></li>
                <li className="nav-item"><a href="#work" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 500 }}>WORK</a></li>
                <li className="nav-item"><a href="#contact" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 500 }}>CONTACT</a></li>
                <li>
                    <a href="#contact" style={{
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '30px',
                        padding: '0.8rem 1.5rem',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        color: '#fff'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                            e.currentTarget.style.color = 'var(--accent-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                            e.currentTarget.style.color = '#fff';
                        }}
                    >
                        LET'S TALK
                    </a>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
