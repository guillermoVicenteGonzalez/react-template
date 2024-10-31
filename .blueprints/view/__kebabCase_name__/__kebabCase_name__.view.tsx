import React from 'react'
import styles from './{{ kebabCase name }}.module.css'

interface {{pascalCase name}}ViewProps  {
    // query parameters
    searchParams?: { [key: string]: string | string[] | undefined }
    // url parameters
    params?: { [key: string]: string | undefined }
}

export const {{pascalCase name}}View:React.FC<{{pascalCase name}}ViewProps> = ({...props}) =>{
    return <div data-testid="{{ kebabCase name }}-view" className={styles.container}></div>
}
