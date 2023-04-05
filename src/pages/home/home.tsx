import { FC } from 'react'

import { Smt } from '@widgets/smt'

import './home.css'

const Home: FC = () => (
  <div className="home">
    <Smt title="first" /> <Smt title="second" /> home
  </div>
)

export default Home
