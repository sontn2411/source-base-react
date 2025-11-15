import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { blueLogo } from '../../../assets'

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [scrolledUp, setScrolledUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      const atTop = currentScroll <= 0
      setIsAtTop(atTop)
      if (currentScroll > lastScrollY && currentScroll > 100) {
        if (isVisible) {
          setIsVisible(false)
          gsap.to(headerRef.current, {
            y: -200,
            duration: 0.4,
            ease: 'power2.out',
          })
        }
      } else if (currentScroll < lastScrollY) {
        if (!isVisible) {
          setIsVisible(true)
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
        }
        setScrolledUp(true)
      }

      if (atTop) {
        setScrolledUp(false)
      }

      setLastScrollY(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isVisible])

  return (
    <header
      ref={headerRef}
      className='fixed top-8 left-5 right-5 z-50 transition-colors duration-300'
    >
      <div
        className={`flex justify-between p-4 px-8 rounded-full shadow-md transition-all duration-300 ease-in-out
          ${
            isAtTop
              ? 'bg-color-5  border border-color-4'
              : scrolledUp
              ? 'bg-color-6 '
              : 'bg-color-5'
          }
        `}
      >
        {/* Logo */}
        <div>
          <img src={blueLogo} alt='logo' className='h-10' />
        </div>

        {/* Button */}
        <div>
          <button className='bg-white flex items-center gap-2 h-12 rounded-full px-8 group hover:bg-color-3 hover:cursor-pointer transition-all duration-200 ease-linear'>
            <span className='font-bold group-hover:text-white'>
              Register Now
            </span>
            <div className='text-color-3 group-hover:text-white'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 16 16'
                height='24px'
                width='24px'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z'></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
