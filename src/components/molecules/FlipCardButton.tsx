import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSpring, a } from '@react-spring/web'

import styles from 'src/css/molecules/styles.module.css'

export const FlipCardButton = () => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div  className={styles.container} onClick={() =>  set(state => !state) }>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      />
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  )
}
