import { createContext, useContext, useState } from "react";

import userData from "../data.json";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
	const [data, setData] = useState(userData);
	const [time, setTime] = useState("daily");

	const values = { data, time, setTime };

	return (
		<DashboardContext.Provider value={values}>
			{children}
		</DashboardContext.Provider>
	);
};

export const useDashboard = () => useContext(DashboardContext);
