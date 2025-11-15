import { bgFooter, blueLogo } from '../../../assets'
import ContactFooter from './Contact'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer
      className=' bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      <div className='container mx-auto sm:w-7xl w-full  flex sm:flex-row flex-col text-white h-full'>
        <div className='w-[35%] pt-24 pb-16 px-2 flex flex-col justify-between '>
          <div className=''>
            <img src={blueLogo} alt='logo' className='h-12' />
          </div>
          <Socials />
        </div>
        <div className='w-full pt-24 border-l border-color-4 '>
          <ContactFooter />
          <div className='border-t border-color-4 h-16 flex items-center justify-items-center  '>
            <div className='px-2 pl-12 '>
              <p className='h-full'>
                ©2025 All rights For Vibent. Designed By{' '}
                <a
                  href='#'
                  className='text-color-2 hover:text-color-3 transition-all duration-300 ease-linear'
                >
                  RSTheme.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
