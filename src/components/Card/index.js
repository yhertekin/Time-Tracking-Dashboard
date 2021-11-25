import React from "react";

import style from "./Card.module.css";
const Card = ({ item, time, image, color }) => {
	return (
		<div className={style.card} style={{ backgroundColor: color }}>
			<div className={style.imageSection}>
				<img className={style.image} src={image} alt="" />
			</div>
			<div className={style.cardInfo}>
				<div className={style.header}>
					<div>{item["title"]}</div>
					<span className={style.dots}>...</span>
				</div>
				<div className={style.content}>
					<div className={style.current}>
						{item["timeframes"][time]["current"]} hrs
					</div>
					<div className={style.previous}>
						{`Last ${
							time === "daily" ? "Day" : time === "weekly" ? "Week" : "Month"
						} - `}
						{item["timeframes"][time]["previous"]}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
