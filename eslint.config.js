import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import * as cssModulesPlugin from "eslint-plugin-css-modules";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", ".blueprints", ".storybook"] },
	{
		settings: { react: { version: "18.3" } },
		plugins: {
			prettier,
			react: pluginReact,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"css-modules": cssModulesPlugin,
		},
		extends: [
			// eslintPrettier,
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
			prettier,
			cssModulesPlugin.configs.recommended,
		],
		files: ["**/*.{ts,tsx}"],
		ignores: ["./.blueprints/", "**/.blueprints/"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ["./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},

		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			//JS RULES
			//should not be changed
			camelcase: "warn",
			complexity: ["error", 10],
			"class-methods-use-this": "warn",
			// "max-lines-per-function": ["error", 20],
			// "no-empty": "error",
			"no-empty-function": "error",
			"no-global-assign": "error",
			"no-invalid-this": "error",
			"no-shadow": "warn",
			"no-duplicate-imports": "error",
			"no-self-compare": "error",
			"no-unreachable-loop": "error",
			"require-atomic-updates": "error",
			"no-empty-pattern": "warn",

			//can be changed
			"operator-assignment": "warn",
			"prefer-arrow-callback": "warn",
			"prefer-exponentiation-operator": "warn",
			"prefer-object-has-own": "warn",
			"prefer-regex-literals": "warn",
			"prefer-template": "warn",
			"require-yield": "warn",
			"vars-on-top": "warn",
			// "one-var": ["error", "consecutive"],

			//REACT
			"react/boolean-prop-naming": "error",
			"react/jsx-indent": "off",
			"react/jsx-indent-props": "off",
			"react/jsx-no-undef": "error",
			"react/jsx-no-useless-fragment": "error",
			"react/jsx-pascal-case": "error",
			"react/jsx-sort-props": "error",
			"react/no-array-index-key": "warn",
			"react/no-children-prop": "warn",
			"react/no-deprecated": "warn",
			"react/no-invalid-html-attribute": "warn",
			"react/no-typos": "warn",
			"react/no-unused-class-component-methods": "warn",
			"react/no-unused-state": "error",
			"react/prefer-read-only-props": "off",
			"react/self-closing-comp": "warn",
			"react/style-prop-object": "warn",

			//Typescript
			//for empty propTypes interfaces
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/unbound-method": "off",
			"@typescript-eslint/require-await": "off",

			//css modules
			"css-modules/no-unused-class": "off", //si usamos BEM salta siempre
		},
	}
);
