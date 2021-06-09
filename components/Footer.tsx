import React from 'react'
import styles from '@styles/styles.module.css'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			built with: react, nextjs and the wonderful&nbsp;
			<Link href='https://thespacedevs.com/'>
				<a className={styles.link}>spacedevs api</a>
			</Link><br /><br />
			built by <Link href='https://github.com/Okirshen'><a className={styles.link}>okirshen</a></Link>
		</footer>
	)
}

export default Footer
