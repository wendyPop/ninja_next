import { useEffect, useState } from 'react'
import styles from '../../styles/Ninjas.module.css'

const Ninjas = () => {
  const [ result, setResult ] = useState([])

  const fetchData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	return await res.json()
  }
  useEffect(() => {
	fetchData().then((res) => {
	  setResult(res)
	  })
  }, [])
  return (
	<div>
	  <h1>All Ninjas</h1>
	  { result.map(ninja => (
		<div key={ninja.id}>
		  <a className={styles.single}>
			<h3>{ ninja.name }</h3>
		  </a>
		</div>
	  ))}
	</div>
  )
}
export default Ninjas
