import { FC } from 'react'
import { PropsWithRenderLog, withRenderLog } from 'react-render-log'

import './smt.css'

type Props = {
  title: string
}

const Smt: FC<PropsWithRenderLog<Props>> = ({ title }) => (
  <div className="smt">{title}</div>
)

export default withRenderLog(Smt)
