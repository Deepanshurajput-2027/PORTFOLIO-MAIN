import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer style={{ padding: '4rem 5%', borderTop: '1px solid #111', background: '#050505', color: '#666' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#fff' }}>DevByte.</span>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="https://github.com/Deepanshurajput-2027" className="social-link"><Github size={30} /></a>
                    <a href="https://twitter.com" className="social-link"><Twitter size={30} /></a>
                    <a href="https://linkedin.com/in/deepanshu-rajput-278051286" className="social-link"><Linkedin size={30} /></a>
                    <a href="https://instagram.com" className="social-link"><Instagram size={30} /></a>
                </div>

                <button
                    onClick={scrollToTop}
                    className="flex text-[#888] hover:text-[#eab308] items-center gap-2 transition-colors border-none bg-transparent cursor-pointer group uppercase tracking-widest text-xs font-heading font-semibold ml-auto md:ml-0"
                >
                    Back to Top
                    <span className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#eab308]/50 group-hover:-translate-y-1 transition-all">
                        <ArrowUp size={14} />
                    </span>
                </button>
            </div>
        </footer>
    )
}

export default Footer;
