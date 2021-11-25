import React from "react";
import Card from "../Card";
import style from "./CardList.module.css";
import work from "../../images/icon-work.svg";
import play from "../../images/icon-play.svg";
import study from "../../images/icon-study.svg";
import exercise from "../../images/icon-exercise.svg";
import social from "../../images/icon-social.svg";
import self_care from "../../images/icon-self-care.svg";

import { useDashboard } from "../../context/DashboardContext";

const CardList = () => {
	const { data, time } = useDashboard();

	const images = [work, play, study, exercise, social, self_care];
	const colors = [
		"hsl(15, 100%, 70%)",
		"hsl(195, 74%, 62%)",
		"hsl(348, 100%, 68%)",
		"hsl(145, 58%, 55%)",
		"hsl(264, 64%, 52%)",
		"hsl(43, 84%, 65%)",
	];

	return (
		<div className={style.cardList}>
			{data.map((item, key) => (
				<Card
					item={item}
					time={time}
					key={key}
					image={images[key]}
					color={colors[key]}
				/>
			))}
		</div>
	);
};

export default CardList;
