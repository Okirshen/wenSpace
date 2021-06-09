import LaunchCard from '@/LaunchCard';
import Launch from '@lib/Launch';
import axios from 'axios';
import styles from '@styles/styles.module.css'
import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';

interface Props {
	launches: Launch[]
}

const index: FC<Props> = ({ launches }) => {
	return <main className={styles.cards}>
		{launches.map((launch) => (
			<LaunchCard key={launch.id} launch={launch}/>
		))}
	</main>
}

export default index

export async function getServerSideProps(context) {
	console.log(moment().format('yyyy-MM-DDThh:mm:ss\Z'));

	const { data } = await axios.get<{results: Launch[]}>(`${process.env.API}/launch/?ordering=net&net__gt=${moment().format('yyyy-MM-DDThh:mm:ss')}Z`)
	console.dir(data);
  return {
    props: {launches: data.results},
  }
}
