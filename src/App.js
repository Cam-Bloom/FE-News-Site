import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article/Article";
import Home from "./components/Home/Home";
import TopicPage from "./components/TopicPage/TopicPage";
import NotFound from "./components/NotFound/NotFound";
import MenuPage from "./components/MenuPage/MenuPage";
import AboutUs from "./components/AboutUs/AboutUs";
import LoginPage from "./components/LoginPage/LoginPage";
import {UserProvider} from "./context/UserContext";
import LoginConfirmation from "./components/LoginConfirmation/LoginConfirmation";


function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/article/:article_id" element={<Article />} />
					<Route path="/topics/:topic" element={<TopicPage />} />
					<Route path="/menu" element={<MenuPage />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/loginconfirm" element={<LoginConfirmation />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
