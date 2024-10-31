import React, { useState } from "react";
import styles from "./welcome.module.scss";

interface WelcomeViewProps {
	// query parameters
	searchParams?: { [key: string]: string | string[] | undefined };
	// url parameters
	params?: { [key: string]: string | undefined };
}

export const WelcomeView: React.FC<WelcomeViewProps> = () => {
	const [test, setTest] = useState();

	return (
		<div className={styles["welcome-view"]} data-testid='welcome-view'>
			<header className={styles["welcome-view__icons"]}>
				<a
					className={styles["uxcale-icon"]}
					href='https://www.uxcale.com/'
					target='_blank'
				>
					<img alt='Axpe' className={styles.icon} src='/assets/uxcale.svg' />
				</a>

				<a
					className={styles["react-icon"]}
					href='https://www.react.dev'
					target='_blank'
				>
					<img alt='Axpe' className={styles.icon} src='/assets/react.svg' />
				</a>
			</header>

			<section className={styles["welcome-view__title"]}>
				<h1>uXcale React template</h1>
			</section>

			<section className={styles["welcome-view__summary"]}>
				<h1 className={styles["welcome-view__summary__title"]}>
					Bienvenidos a uXcale React.js
				</h1>

				<h2 className={styles["welcome-view__summary__subtitle"]}>
					Este es el arquetipo de uxcale basado en React + Vite.
				</h2>

				<p className={styles["welcome-view__summary__paragraph"]}>
					Consulta el Readme.md del repositorio para saber más sobre las
					Características del arquetipo y procura seguir las reglas
					especificadas para aprovechar al máximo sus capacidades
				</p>

				<h1>Buenas tardes</h1>
			</section>
		</div>
	);
};
