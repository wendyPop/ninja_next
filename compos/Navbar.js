import Image from 'next/image'

const Navbar = () => {
  return (
	<nav>
	  <div className="logo">
		{/*<img src="/logo.png" alt="logo"/>*/}
		<Image src='/logo.png' width={128} height={77}/>
	  </div>
	  <a>HOME</a>
	  <a>ABOUT</a>
	  <a>LISTING</a>
	</nav>
  )
}
export default Navbar
