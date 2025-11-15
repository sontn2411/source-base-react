import { bgHome } from '../../assets'

const HomePage = () => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen'
      style={{ backgroundImage: `url(${bgHome})` }}
    ></div>
  )
}

export default HomePage
