import React from 'react'
import styles from './welcome.module.css'

type WelcomeViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export function WelcomeView(props: WelcomeViewProps) {
    return <div data-testid="welcome-view" className={styles.container}></div>
}
