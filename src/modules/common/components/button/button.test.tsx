import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Button } from "./button.component.tsx"

describe(Button, () => {
	test("should render", () => {
		render(<Button />);
		expect(screen.getByTestId("welcome-view")).toBeDefined();
	});
});
