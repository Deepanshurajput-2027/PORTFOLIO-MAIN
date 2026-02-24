import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Compass, Palette, Cpu, Rocket, TrendingUp, ShieldCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Strategy",
            desc: "We define the roadmap for digital products that actually matter.",
            icon: <Compass className="h-5 w-5 text-white" />
        },
        {
            title: "Design",
            desc: "Pixel-perfect interfaces that blend aesthetics with ruthless usability.",
            icon: <Palette className="h-5 w-5 text-white" />
        },
        {
            title: "Engineering",
            desc: "Rock-solid code. High performance. Scalable architectures.",
            icon: <Cpu className="h-5 w-5 text-white" />
        },
        {
            title: "Product",
            desc: "From concept to launch. We build MVPs ready for market validation.",
            icon: <Rocket className="h-5 w-5 text-white" />
        },
        {
            title: "Scalability",
            desc: "Architectures designed to handle millions of users without compromising speed.",
            icon: <TrendingUp className="h-5 w-5 text-white" />
        },
        {
            title: "Security",
            desc: "Enterprise-grade protection baked into every layer of your application.",
            icon: <ShieldCheck className="h-5 w-5 text-white" />
        }
    ];

    return (
        <section id="services" className="section" style={{ background: '#050505' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ marginBottom: '6rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 text-center">

                        What We Do<span style={{ color: 'var(--accent-color, #eab308)' }}>.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, idx) => (
                        <ServiceCard key={idx} title={s.title} desc={s.desc} icon={s.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
