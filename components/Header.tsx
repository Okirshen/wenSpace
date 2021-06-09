import React from 'react'
import styles from '@styles/styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>wenSpace</h1>
			<div>
				<Link href="https://github.com/Okirshen/wenSpace"><a className={styles.githubBtn}><FontAwesomeIcon color='inherit' size="2x" icon={faGithub} /></a></Link>
			</div>
		</header>
	)
}

export default Header
