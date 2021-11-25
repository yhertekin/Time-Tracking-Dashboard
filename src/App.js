import { DashboardProvider } from "./context/DashboardContext";
import UserInfo from "./components/UserInfo";
import CardList from "./components/CardList";

import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.main}>
			<DashboardProvider>
				<UserInfo />
				<CardList />
			</DashboardProvider>
		</div>
	);
}

export default App;
