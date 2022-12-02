// SSG 기반으로 pre-render 시에 동적 라우팅 구성
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ninja => {
	return {
	  params: { id: ninja.id.toString() }
	}
  })
  // router parameter 에 해당하는 값만 빼오기
  return {
	paths,
	fallback: false // fallback 페이지
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json()
  return {
	props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
	<div>
	  <h1>{ ninja.name }</h1>
	  <p>{ ninja.email }</p>
	  <p>{ ninja.website }</p>
	  <p>{ ninja.address.city }</p>
	</div>
  )
}
export default Details;
