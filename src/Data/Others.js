import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa'
import { SiFirebase, SiMongodb } from 'react-icons/si'
import { AiOutlineConsoleSql, AiOutlineGithub } from 'react-icons/ai'
import { TbApi } from 'react-icons/tb'

const Others = [
  {
    id: 1,
    name: "ReactJS",
    icon: <FaReact className='icon' />
  },
  {
    id: 2,
    name: "NodeJS",
    icon: <FaNodeJs className='icon' />
  },
  {
    id: 3,
    name: "Sass",
    icon: <FaSass className='icon' />
  },
  {
    id: 4,
    name: "Firebase",
    icon: <SiFirebase className='icon' />
  },
  {
    id: 5,
    name: "SQL",
    icon: <AiOutlineConsoleSql className='icon' />
  },
  {
    id: 6,
    name: "Mongo",
    icon: <SiMongodb className='icon' />
  },
  {
    id: 7,
    name: "GitHub",
    icon: <AiOutlineGithub className='icon' />
  },
  {
    id: 8,
    name: "RestFull",
    icon: <TbApi className='icon' />
  },
]

export default Others