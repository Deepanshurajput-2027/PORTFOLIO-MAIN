import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
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
                        <div key={idx} className="relative min-h-[16rem] md:min-h-[20rem] rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                                <div className="relative flex flex-1 flex-col justify-between gap-3">
                                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                                        {s.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="pt-0.5 text-3xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground font-Orbitron">
                                            {s.title}
                                        </h3>
                                        <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-2xl leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                                            {s.desc}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
