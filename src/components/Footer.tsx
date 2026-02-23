
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 5%', borderTop: '1px solid #111', background: '#050505', color: '#666' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#fff' }}>DevByte.</span>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="https://github.com/Deepanshurajput-2027" className="social-link"><Github size={20} /></a>
                    <a href="https://twitter.com" className="social-link"><Twitter size={20} /></a>
                    <a href="https://linkedin.com/in/deepanshu-rajput-278051286" className="social-link"><Linkedin size={20} /></a>
                    <a href="https://instagram.com" className="social-link"><Instagram size={20} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
