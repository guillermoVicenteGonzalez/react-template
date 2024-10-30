// import { MainViewView } from "@/modules/common/views/main-view";
import { WelcomeView } from "@/common/views/welcome";
import { createBrowserRouter } from "react-router-dom";
// import { MainViewView } from "../modules/common/views/main-view";
// import { OtherViewView } from "../modules/common/views/other-view";

const router = createBrowserRouter([
	{
		path: "/",
		element: <WelcomeView />,
	},
]);

export default router;
