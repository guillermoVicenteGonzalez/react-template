import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { {{pascalCase name}} } from "./{{kebabCase name}}.component.tsx"

describe({{pascalCase name}}, () => {
	test("should render", () => {
		render(<{{pascalCase name}} />);
		expect(screen.getByTestId("welcome-view")).toBeDefined();
	});
});
