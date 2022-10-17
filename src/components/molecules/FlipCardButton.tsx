import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSpring, a } from '@react-spring/web'
import { useNavigate } from "react-router-dom"

import styles from 'src/css/molecules/styles.module.css'

export const FlipCardButton = (props :any) => {
  const { id } = props;
  const navigate = useNavigate()
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 160 },
  })

  return (
    <div  className={styles.container} onClick={() =>{
        set(state => !state);
        setTimeout(() => { navigate(`/contents_videos/${id}`, {state: {id : id}} )}, 2000);
        }
      }
    >
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
