'use client'

import styles from '../styles.module.scss';
import desert from '../../../public/images/desert.webp';
import dog from '../../../public/images/dog.webp';
import lizard from '../../../public/images/lizard.webp';
import man from '../../../public/images/man.webp';
import cat from '../../../public/images/cat.webp';
import horse from '../../../public/images/horse.webp';
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index () {

    const container = useRef(null);
    const { scrollYProgress } = useScroll ({
        target: container,
        offset: ['start start', ' end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: desert,
            scale:scale4
        },
        {
            src: lizard,
            scale:scale5
        },
        {
            src: dog,
            scale:scale6
        },
        {
            src: horse,
            scale:scale5
        },
        {
            src: man,
            scale:scale6
        },
        {
            src: cat,
            scale:scale8
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index) => {
                       return <motion.div style={{scale}} key={ index } className={styles.el}>
                            <div  className={styles.imageContainer}>
                                <Image 
                                    src={src}
                                    fill
                                    alt='image'
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}