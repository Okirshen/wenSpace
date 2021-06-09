import Launch from '@lib/Launch'
import React, { FC, useEffect, useState } from 'react'
import styles from '@styles/styles.module.css'
import moment, { Duration, Moment } from 'moment'

interface Props {
	launch: Launch
}

const LaunchCard: FC<Props> = ({ launch: { pad, name, net, image } }) => {
	const time = moment(net)

	const [timer, setTimer] = useState<Duration>(moment.duration(0))

	useEffect(() => {
		setInterval(() => {
			setTimer(moment.duration(time.diff(moment.now())))
		}, 1000)
	}, [])

	return (
		<div className={styles.card}>
			<img src={image} className={styles.img} />
			<div className={styles.cardContainer}>
				<h2>{name}</h2>
				<div>{pad.location.name}</div>
				<h3>{`${timer.days()} days ${timer.hours()} hours ${timer.minutes()} minutes ${timer.seconds()} seconds`}</h3>
			</div>
		</div>
	)
}

export default LaunchCard
