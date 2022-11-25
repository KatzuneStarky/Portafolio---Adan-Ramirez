import { FaReact, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa'
import { SiJavascript, SiCplusplus, SiCsharp, SiPhp } from 'react-icons/si'
import { AiFillAndroid } from 'react-icons/ai'

const Languages = [
  {
    id: 1,
    name: "Html5",
    icon: <FaHtml5 className='icon' />
  },
  {
    id: 2,
    name: "Css3",
    icon: <FaCss3Alt className='icon' />
  },
  {
    id: 3,
    name: "JavaSctipt",
    icon: <SiJavascript className='icon' />
  },
  {
    id: 4,
    name: "C++",
    icon: <SiCplusplus className='icon' />
  },
  {
    id: 5,
    name: "C#",
    icon: <SiCsharp className='icon' />
  },
  {
    id: 6,
    name: "PHP",
    icon: <SiPhp className='icon' />
  },
  {
    id: 7,
    name: "Android",
    icon: <AiFillAndroid className='icon' />
  },
  {
    id: 8,
    name: "Java",
    icon: <FaJava className='icon' />
  }
]

export default Languages