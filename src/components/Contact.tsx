import { motion } from 'framer-motion';
import { ContactForm } from './ui/ContactForm';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 5%', background: '#050505', color: '#fff', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '900px' }}
                >
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--accent-color)',
                        fontWeight: 600,
                        marginBottom: '2rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Say Hello
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                        lineHeight: 0.9,
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em'
                    }}>
                        Let's start a <br />
                        <span style={{ color: 'var(--text-secondary)' }}>conversation<span style={{ color: 'var(--accent-color, #eab308)' }}>.</span></span>
                    </h2>

                    <p style={{ fontSize: '1.3rem', color: '#888', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.6 }}>
                        Interested in working together? Drop me a message or email me directly.
                        I'll buy the virtual coffee.
                    </p>

                    <ContactForm />

                    <div className="flex flex-col gap-2 mt-8">
                        <span className="text-[#555] text-sm uppercase tracking-widest font-heading">Or email directly</span>
                        <a href="mailto:deepanshurajput2731@gmail.com"
                            className="text-xl md:text-2xl text-white hover:opacity-80 transition-opacity border-b-2 border-yellow-500 pb-1 w-fit"
                        >
                            deepanshurajput2731@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
