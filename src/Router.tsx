
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Step1 } from './components/Steps/Step1'
import { Step2 } from './components/Steps/Step2'
import { Step3 } from './components/Steps/Step3'
import { Finishing } from './components/Steps/Finishing'



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Step1 />} />
          <Route path="/select_plan" element={<Step2 />} />
          <Route path="/pick_add_ons" element={<Step3 />} />
          <Route path="/finishing_up" element={<Finishing />} />
      </Route>
    </Routes>
  )
}