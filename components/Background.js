import React, { useRef, useEffect } from 'react';

import Gradient from './Gradient.js';
import styles from '../styles/components/Background.module.css'

export default function Background() {
    const ref = useRef();

    useEffect(() => {

        const gradient = new Gradient(ref.current)

        let requestId;

        function render() {
            gradient.update();

            requestId = requestAnimationFrame(render);
        }

        render();

        return () => {
            cancelAnimationFrame(requestId)
        }
    });

    return (
        <div>
            <canvas className={styles.bg}
                ref={ref}
            />
        </div>
    );
}