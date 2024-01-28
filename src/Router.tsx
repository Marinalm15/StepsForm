
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Step1 } from './components/Steps/Step1'
import { Step2 } from './components/Steps/Step2'



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/personal_info" element={<Step1 />} />
          <Route path="/select_plan" element={<Step2 />} />
      </Route>
    </Routes>
  )
}