import { SvgIcon } from '../../ui/SvgIcon'

const socials = [
  {
    id: 8,
    name: 'Facebook',
    icon: {
      iconName: 'line-md:facebook',
      iconData:
        '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/></path></g>',
      width: 24,
      height: 24,
      isSvgEditable: false,
      isIconNameEditable: false,
    },
  },
  {
    id: 9,
    name: 'Facebook',
    icon: {
      iconName: 'line-md:facebook',
      iconData:
        '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/></path></g>',
      width: 24,
      height: 24,
      isSvgEditable: false,
      isIconNameEditable: false,
    },
  },
  {
    id: 10,
    name: 'Facebook',
    icon: {
      iconName: 'line-md:facebook',
      iconData:
        '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/></path></g>',
      width: 24,
      height: 24,
      isSvgEditable: false,
      isIconNameEditable: false,
    },
  },
]

const Socials = () => {
  return (
    <div className='flex gap-4 items-center'>
      <span className='font-bold '>Social Link</span>
      <div className='flex gap-2'>
        {socials.map((item) => (
          <button
            key={item.id}
            className='p-1.5 bg-color-1  hover:bg-color-3  transition-all duration-300 ease-linear  hover:cursor-pointer'
            title={item.name}
          >
            <SvgIcon iconData={item.icon.iconData} width={24} height={24} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Socials
