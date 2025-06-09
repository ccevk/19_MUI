import { useState } from 'react'
import './App.css'
import MUICard from './components/MUICard'
import MUIAccordion from './components/MUIAccordion'
import ButtonBar  from './components/ButtonBar'
import ButtonBar2 from './components/ButtonBar2'
import MUIImageList from './components/MUIImageList'
import MUIDrawer from './components/MUIDrawer'
import MUIBadge from './components/MUIBadge'
import MUIAvatar from './components/MUIAvatar'
import MUITooltip from './components/MUITooltip'
import MUIAlert from './components/MUIAlert'
import MUIDialog from './components/MUIDialog'
import MUISnackBar from './components/MUISnackBar'
import MUIProgress from './components/MUIProgress'
import MUISkeleton from './components/MUISkeleton'
import MUITable from './components/MUITable'
import MUITabs from './components/MUITabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <ButtonBar />  */}
    {/* <MUIImageList /> */}
    {/* <MUIAccordion /> */}
    {/* <MUIBadge /> */}
    {/* <MUIAvatar /> */}
    {/* <MUITooltip /> */}
    {/* <MUIAlert /> */}
    {/* <MUIDialog /> */}
    {/* <MUISnackBar /> */}
    {/* <MUIProgress /> */}
    {/* <MUISkeleton /> */}
    {/* <MUITable /> */}
    <MUITabs />
    </div>
  )
}

export default App
