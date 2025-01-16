//Footer component
import facebook from '../assets/images/icons8-facebook.svg';
import instagram from '../assets/images/icons8-instagram.svg';
import messenger from '../assets/images/icons8-messenger.svg';
function Footer() {

  const contactIcons = [
    {id:1, title:'Facebook', icon: facebook, link:'facebook.com'},
    {id:2, title:'Instagram', icon: instagram, link:'instagram.com'},
    {id:3, title:'Messenger', icon: messenger, link:'facebook.com'},
  ];
  return (
    <footer className="bg-black px-8 py-5">
        <hr />
        <div className='flex lg:flex-row flex-col lg:justify-between gap-3 items-center'>
          <div>
            <p>Copyright © 2025 Chris Quashie .All rights reserved.</p>
          </div>
          <div className='flex gap-3'>
            {contactIcons
            .sort(()=>Math.random())
            .map(data=>(
              <a href={`mailto:${data.link}`}
              key={data.id}
              className=''>
                <img className='w-[50px] h-[50px]' src={data.icon} alt={data.title} aria-label={data.title} />
              </a>
            ))
            }
          </div>
        </div>
    </footer>
  )
}

export default Footer