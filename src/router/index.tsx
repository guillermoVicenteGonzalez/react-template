import { WelcomeView } from "@/modules/common/views/welcome";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <WelcomeView />,
	},
]);

export default router;
