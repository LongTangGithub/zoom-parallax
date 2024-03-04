'use client'

import styles from '../styles.module.scss';
import desert from '../../../public/images/desert.webp';
import dog from '../../../public/images/dog.webp';
import cat from '../../../public/images/cat.webp';
import man from '../../../public/images/man.webp';
import sheep from '../../../public/images/sheep.webp';
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

    return (
        <div className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.el}>
                    <motion.div style={{scale: scale4}} className={styles.imageContainer}>
                        <Image 
                            src={desert}
                            fill
                            alt='image'
                            placeholder='blur'
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}