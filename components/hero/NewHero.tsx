import React from 'react'
import * as motion from 'motion/react-client'

function NewHero() {
    const headlineWords = 'Ideas Become Powerful Products.'.split(' ')
    const paragraph =
        'We build scalable, high-impact software solutions that turn your vision into working products. From concept to full-stack products.'

    const baseDelay = headlineWords.length * 0.15

    return (
        <section
            className="bg-main-bg bg-center bg-repeat bg-[length:25vw_25vw] h-[125vh] z-10 relative"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '15vw 15vw',
            }}
        >
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-wrap justify-center ">
                    {headlineWords.map((word, index) => {
                        const isSpecial = ['Powerful', 'Products.'].includes(
                            word
                        )
                        return (
                            <motion.span
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                    filter: 'blur(4px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                    ease: 'easeOut',
                                }}
                                className={`inline-block mr-2 ${
                                    isSpecial ? 'text-main' : ''
                                }`}
                            >
                                {word}
                            </motion.span>
                        )
                    })}
                </h1>

                <motion.p
                    className="max-w-xl text-gray-300 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: {} }}
                >
                    {paragraph.split(' ').map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{
                                duration: 0.4,
                                delay: baseDelay + index * 0.05 + 0.3,
                                ease: 'easeOut',
                            }}
                            className="inline-block mr-1"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>

                <div className="flex gap-4">
                    {['Get In Touch', 'Explore Our Work'].map((label, i) => (
                        <motion.button
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay:
                                    baseDelay +
                                    paragraph.split(' ').length * 0.05 +
                                    0.5 +
                                    i * 0.2,
                                duration: 0.5,
                                ease: 'easeOut',
                            }}
                            className={`px-6 py-2 font-medium rounded-2xl transition ${
                                i === 0
                                    ? 'bg-main text-[#0d141c] hover:opacity-90'
                                    : 'border border-main text-main hover:bg-main hover:text-[#0d141c]'
                            }`}
                        >
                            {label}
                        </motion.button>
                    ))}
                </div>
            </div>
            <motion.div
                className="absolute bottom-0 left-0 -z-40 w-full overflow-hidden h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: "url('/Ellipse-9.svg')" }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
        </section>
    )
}

export default NewHero
