import { motion } from 'framer-motion';

interface WorkCardProps {
    title: string;
    category: string;
    imgUrl?: string;
    link?: string;
    itemVariant: any; // We'll pass the fremar motion variants
}

export const WorkCard = ({ title, category, imgUrl, link, itemVariant }: WorkCardProps) => {
    return (
        <motion.div variants={itemVariant} className="work-card group relative">
            <a href={link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="work-card-img relative" style={{
                    background: '#111',
                    borderRadius: '24px',
                    border: '1px solid #222',
                    overflow: 'hidden',
                    aspectRatio: '4/3' // Give it a fixed aspect ratio for images
                }}>
                    {imgUrl ? (
                        <>
                            {/* Dark gradient overlay to blend with background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

                            {/* Monochromatic overlay that fades on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 z-10 transition-colors duration-500 pointer-events-none" />

                            <img
                                src={imgUrl}
                                alt={title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                className="transition-all duration-700 ease-out group-hover:scale-110 grayscale-[0.8] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                            />
                        </>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-heading text-[#333]">
                            {title.substring(0, 2).toUpperCase()}
                        </div>
                    )}
                </div>
            </a>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{title}</h3>
                <span style={{
                    border: '1px solid #333',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: '#888',
                    textTransform: 'uppercase'
                }}>
                    {category}
                </span>
            </div>
        </motion.div>
    );
};
