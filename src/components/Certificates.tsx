import { motion } from 'framer-motion';
import { CardStack, type CardStackItem } from './ui/card-stack';

const CERTIFICATES: CardStackItem[] = [
    { id: 1, title: 'AI Agent (LetsUpgrade)', url: '/certification/AI Agent letsupgrade.png', pdfUrl: '/certification/AI Agent letsupgrade.pdf', tag: 'AI & Agents' },
    { id: 2, title: 'ChatGPT', url: '/certification/CHAT-GPT CERTIFICATE.png', pdfUrl: '/certification/CHAT-GPT CERTIFICATE.pdf', tag: 'Generative AI' },
    { id: 3, title: 'Python Part 1', url: '/certification/PYTHON PART-1 CERTIFICATE.png', pdfUrl: '/certification/PYTHON PART-1 CERTIFICATE.pdf', tag: 'Backend' },
    { id: 4, title: 'Python Part 2', url: '/certification/PYTHON PART-2 CERTIFICATE.png', pdfUrl: '/certification/PYTHON PART-2 CERTIFICATE.pdf', tag: 'Backend' },
    { id: 5, title: 'DSA', url: '/certification/DSA CERTIFICATE.png', pdfUrl: '/certification/DSA CERTIFICATE.pdf', tag: 'Core CS' },
    { id: 6, title: 'C++', url: '/certification/C++ certificate.png', pdfUrl: '/certification/C++ certificate.pdf', tag: 'Core CS' },
    { id: 7, title: 'C Programming', url: '/certification/C CERTIFICATE.png', pdfUrl: '/certification/C CERTIFICATE.pdf', tag: 'Core CS' },
    { id: 8, title: 'HTML (LetsUpgrade)', url: '/certification/HTML letsupgrade.png', pdfUrl: '/certification/HTML letsupgrade.pdf', tag: 'Frontend' },
    { id: 9, title: 'HTML', url: '/certification/HTML CERTIFICATE.png', pdfUrl: '/certification/HTML CERTIFICATE.pdf', tag: 'Frontend' },
    { id: 10, title: 'CSS', url: '/certification/CSS CERTIFICATE.png', pdfUrl: '/certification/CSS CERTIFICATE.pdf', tag: 'Frontend' },
    { id: 11, title: 'Introduction to Automation', url: '/certification/Introduction to Automation_Deepanshu Rajput_en-US_diploma.png', pdfUrl: '/certification/Introduction to Automation_Deepanshu Rajput_en-US_diploma.pdf', tag: 'Automation' },
    { id: 12, title: 'ICAT Participation', url: '/certification/ICAT_PARTICIPATION_CERTIFICATE.png', pdfUrl: '/certification/ICAT_PARTICIPATION_CERTIFICATE.pdf', tag: 'Event' },
];

const ImageViewer = ({ url }: { url: string }) => {
    return (
        <div className="w-full h-full bg-neutral-900 rounded-xl overflow-hidden relative group">
            {/* We apply a subtle inner shadow to blend the document into the dark UI */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] z-20 pointer-events-none mix-blend-multiply"></div>

            {/* Glossy reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none rounded-xl" style={{ mixBlendMode: 'overlay' }}></div>

            <img
                src={url}
                alt="Certificate"
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const Certificates = () => {
    return (
        <section id='certificates' className="relative w-full min-h-screen bg-black py-32 overflow-hidden flex flex-col items-center">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-yellow-900/10 blur-[120px] mix-blend-screen opacity-50"></div>
                <div className="absolute w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-0"></div>

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center z-10 mb-16 px-4"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                        Honors <br />& Certs<span style={{ color: 'var(--accent-color, #eab308)' }}>.</span>
                    </h2>
                    <p className="max-w-md mx-auto mt-6 text-neutral-400 font-mono text-sm tracking-widest uppercase">
                        A curated collection of milestones proving technical excellence and constant evolution.
                    </p>
                </motion.div>

                {/* Card Stack */}
                <CardStack
                    items={CERTIFICATES}
                    initialIndex={0}
                    cardWidth={520}
                    cardHeight={320}
                    maxVisible={5}
                    overlap={0.48}
                    spreadDeg={48}
                    loop={true}
                    showDots={true}
                    renderCard={(cert, { active }) => (
                        <CertificateCard cert={cert as Omit<(typeof CERTIFICATES)[0], 'id'> & { id: string | number }} active={active} />
                    )}
                />
            </div>
        </section>
    );
};

interface CertificateCardProps {
    cert: Omit<(typeof CERTIFICATES)[0], 'id'> & { id: string | number };
    active: boolean;
}

const CertificateCard = ({ cert, active }: CertificateCardProps) => {
    const url = cert.url || '';
    const pdfUrl = cert.pdfUrl || '';
    
    return (
        <div className="relative w-full h-full rounded-2xl p-[2px] overflow-visible group">
            {/* Animated Neon Border */}
            <div className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-yellow-600/50 via-yellow-400 to-yellow-600/50 ${active ? 'opacity-100' : 'opacity-0'} blur-md transition-opacity duration-500 z-0 pointer-events-none`}></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-800 to-black z-0 border border-white/10 pointer-events-none"></div>

            {/* Card Content Wrapper */}
            <div className="relative z-10 w-full h-full p-2 md:p-4 flex flex-col rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm pointer-events-none">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 px-2">
                    <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
                        {cert.title}
                    </h3>
                    <span className="text-xs md:text-sm text-yellow-500/80 border border-yellow-500/30 px-2 py-1 rounded-full uppercase tracking-widest bg-yellow-500/10">
                        {cert.tag}
                    </span>
                </div>

                {/* Image Viewer */}
                <div className="flex-1 w-full rounded-xl overflow-hidden border border-white/5 relative group/canvas shadow-inner bg-neutral-900 pointer-events-auto">
                    <ImageViewer url={url} />

                    {/* View Full Button Overlay */}
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover/canvas:opacity-100 flex items-center justify-center transition-opacity duration-300 z-40 backdrop-blur-sm"
                        style={{ cursor: 'none' }}
                        draggable={false}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border whitespace-nowrap border-yellow-500/50 text-yellow-400 rounded-full font-mono text-sm tracking-widest bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors pointer-events-auto"
                        >
                            OPEN ORIGINAL PDF
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
