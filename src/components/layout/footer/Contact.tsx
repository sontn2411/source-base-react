import { ArrowRight } from 'lucide-react'

const datatContacts = [
  {
    id: 1,
    title: 'Venue Address',
    address: '4517 Washington. mg Manchester, Kentucky 39495',
    phone: ['208-6666-0112', '308-5555-0113'],
  },
  {
    id: 2,
    title: 'Contact Us',
    address: '4517 Washington. mg Manchester, Kentucky 39495',
    phone: ['208-6666-0112', '308-5555-0113'],
  },
  {
    id: 3,
    title: 'Newsletter',
    desc: 'Sign up to searing weekly newsletter to get the latest updates.',
    input: 'email',
    placegolder: 'Your email address',
  },
]

const ContactFooter = () => {
  return (
    <ul className='flex gap-4 w-full px-2 pl-12 pb-20'>
      {datatContacts.map((item) => {
        return (
          <li key={item.id} className='w-full flex flex-col gap-4'>
            <h3 className='font-bold text-xl'>{item.title}</h3>
            {item.address && (
              <div className='flex flex-col gap-2 pr-8'>
                <p className='text-basse font-bold'>Address:</p>
                <p className='text-color-2'>{item.address}</p>
              </div>
            )}
            {item.phone && (
              <div className='flex flex-col gap-2 pr-8'>
                <p className='text-basse font-bold'>Phone Call:</p>
                <ul className='text-color-2'>
                  {item.phone.map((phone, index) => (
                    <li key={index}>{phone}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.desc && <p className='text-color-2 py-1'>{item.desc}</p>}
            {item.input && (
              <div className='bg-color-1 h-14 p-2 px-4 flex w-full gap-2'>
                <input
                  name='email'
                  placeholder={item.placegolder}
                  className=' outline-none border-none h-full'
                />
                <button className='bg-color-3 w-full flex items-center justify-center '>
                  <ArrowRight />
                </button>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default ContactFooter
