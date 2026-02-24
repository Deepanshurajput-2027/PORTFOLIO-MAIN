import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate_limited'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Rate Limiting Logic (2 messages per hour)
        const ONE_HOUR = 60 * 60 * 1000;
        const storedTimestamps = JSON.parse(localStorage.getItem('formspree_msgs') || '[]');
        const recentTimestamps = storedTimestamps.filter((time: number) => Date.now() - time < ONE_HOUR);

        if (recentTimestamps.length >= 2) {
            setStatus('rate_limited');
            return;
        }

        setStatus('loading');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mpqjwljj", {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                recentTimestamps.push(Date.now());
                localStorage.setItem('formspree_msgs', JSON.stringify(recentTimestamps));
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="max-w-[600px] mb-12 min-h-[300px]">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-start gap-4 p-8 rounded-2xl bg-[#111] border border-[#333]"
                    >
                        <CheckCircle2 size={48} color="#eab308" />
                        <h3 className="text-3xl font-heading text-white">Message Sent!</h3>
                        <p className="text-[#888] text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-4 text-sm uppercase tracking-widest text-[#fff] hover:text-yellow-500 transition-colors border-b border-transparent hover:border-yellow-500 pb-1"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="contact-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-transparent border-b border-[#333] pb-4 text-xl text-white outline-none focus:border-yellow-500 transition-colors placeholder-[#555]"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full bg-transparent border-b border-[#333] pb-4 text-xl text-white outline-none focus:border-yellow-500 transition-colors placeholder-[#555]"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Project Details"
                                required
                                rows={4}
                                className="w-full bg-transparent border-b border-[#333] pb-4 text-xl text-white outline-none focus:border-yellow-500 transition-colors placeholder-[#555] resize-none"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm">Oops! There was a problem submitting your form. Please try again.</p>
                        )}

                        {status === 'rate_limited' && (
                            <p className="text-yellow-500 text-sm">You've reached the message limit. Please try again in an hour or email directly.</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="mt-2 flex items-center gap-6 w-fit group disabled:opacity-50"
                            style={{ background: 'none', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                        >
                            <span className="text-xl uppercase tracking-widest text-[#fff] group-hover:text-yellow-500 transition-colors">
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </span>

                            <motion.div
                                whileHover={status !== 'loading' ? { x: 10 } : {}}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                style={{
                                    background: '#111',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #333'
                                }}
                            >
                                <ArrowRight size={24} color="#eab308" className={status !== 'loading' ? "group-hover:scale-110 transition-transform" : ""} />
                            </motion.div>
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};
