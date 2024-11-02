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
					className={styles["react-icon"]}
					href='https://www.react.dev'
					target='_blank'
				>
					<img alt='Axpe' className={styles.icon} src='/assets/react.svg' />
				</a>
			</header>

			<section className={styles["welcome-view__title"]}>
				<h1>React template</h1>
			</section>

			<section className={styles["welcome-view__summary"]}>
				<h2 className={styles["welcome-view__summary__subtitle"]}>
					This is a React boilerplate using vite + SWC as a bundles
				</h2>

				<p className={styles["welcome-view__summary__paragraph"]}>
					Consult the Readme.md found in this template's{" "}
					<a
						href='https://github.com/guillermoVicenteGonzalez/react-template'
						target='_blank'
					>
						repository
					</a>{" "}
					to know more about thistemplate's characteristics as well as some tips
					about its recommended usage. Delete this module found under
					/src/modules/common/view/welcome to get started building your app
				</p>
			</section>
		</div>
	);
};
