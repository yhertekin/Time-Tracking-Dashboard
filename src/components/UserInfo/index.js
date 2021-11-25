import { useDashboard } from "../../context/DashboardContext";

import style from "./UserInfo.module.css";
import profilPicture from "../../images/image-jeremy.png";
const UserInfo = () => {
	const { setTime } = useDashboard();
	return (
		<div className={style.panel}>
			<div className={style.personInfo}>
				<img src={profilPicture} alt="profil" className={style.profilPicture} />
				<div className={style.nameSection}>
					<p>report for</p>
					<h1>Jeremy Robson</h1>
				</div>
			</div>

			<div className={style.buttons}>
				<button onClick={() => setTime("daily")}>Daily</button>
				<button onClick={() => setTime("weekly")}>Weekly</button>
				<button onClick={() => setTime("monthly")}>Monthly</button>
			</div>
		</div>
	);
};

export default UserInfo;
