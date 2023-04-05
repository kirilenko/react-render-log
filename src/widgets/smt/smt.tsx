import { FC } from 'react'

import './smt.css'

type Props = {
  title: string
}

const Smt: FC<Props> = ({ title }) => <div className="smt">{title}</div>

export default Smt
