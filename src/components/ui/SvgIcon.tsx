import React from 'react'

interface IconProps {
  iconData: string
  width?: number
  height?: number
}

export const SvgIcon: React.FC<IconProps> = ({
  iconData,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    xmlns='http://www.w3.org/2000/svg'
    dangerouslySetInnerHTML={{ __html: iconData }}
  />
)

// export default function SocialIcons() {
// const socials = [
//   {
//     id: 8,
//     name: 'Facebook',
//     icon: {
//       iconName: 'line-md:facebook',
//       iconData:
//         '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/></path></g>',
//       width: 24,
//       height: 24,
//       isSvgEditable: false,
//       isIconNameEditable: false,
//     },
//   },
// ]

//   return (
//     <div className='flex gap-3'>
//       {socials.map((item) => (
//         <button
//           key={item.id}
//           className='p-2 rounded-full border border-gray-200 hover:bg-gray-100'
//           title={item.name}
//         >
//           <SvgIcon
//             iconData={item.icon.iconData}
//             width={item.icon.width}
//             height={item.icon.height}
//           />
//         </button>
//       ))}
//     </div>
//   )
// }
