import React from 'react'
import styles from './button.module.scss'

export interface ButtonProps  {}

export const Button : React.FC<ButtonProps> = ({}) =>{
    return <div data-testid="button" className={styles.container}></div>
}
