import LaunchCard from '@/LaunchCard';
import Launch from '@lib/Launch';
import axios from 'axios';
import styles from '@styles/styles.module.css'
import React, { useEffect, useState } from 'react';
import moment from 'moment';
// import styles from '../styles/Home.module.css';



export default function Home() {
	const [launches, setLaunches] = useState<Launch[]>([])

	const fetchData = async () => {
		console.log(moment().format('yyyy-MM-DDThh:mm:ss\Z'));

	const { data } = await axios.get<{results: Launch[]}>(`https://lldev.thespacedevs.com/2.2.0/launch/?ordering=net&net__gt=${moment().format('yyyy-MM-DDThh:mm:ss')}Z`)
		setLaunches(data.results as Launch[])
		console.dir(data);

}

	useEffect(() => {
		fetchData()
	}, [])

	return <main className={styles.cards}>
		{launches.map((launch) => (
			<LaunchCard key={launch.id} launch={launch}/>
		))}
	</main>
}