import styles from '../../styles/Ninjas.module.css'
import Link from "next/link";

const Ninjas = ({ ninjas }) => {
  return (
	<div>
	  <h1>All Ninjas</h1>
	  { ninjas.map(ninja => (
		<Link href={'/ninja/' + ninja.id} key={ninja.id}>
		  <span className={styles.single}>
			<h3>{ ninja.name }</h3>
		  </span>
		</Link>
	  ))}
	</div>
  )
}
export default Ninjas

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
	props: {ninjas: data}
  }
}
