import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
	variant?: string;
	test?: string;
}

export const Button: React.FC<ButtonProps> = ({ test }) => {
	return (
		<div className={styles.container} data-testid='div'>
			{test}
			<div className={styles["container__test"]} />
		</div>
	);
};
