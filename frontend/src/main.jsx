import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import {ContextProvider} from "./utils/ContextProvider.jsx";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
				<App/>
			</BrowserRouter>
		</QueryClientProvider>
	</ContextProvider>
);
