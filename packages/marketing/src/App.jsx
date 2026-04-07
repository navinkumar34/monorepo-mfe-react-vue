import { StyledEngineProvider } from "@mui/material"
import { BrowserRouter, Route , Routes} from "react-router-dom"

import Pricing from "../components/Pricing"
import Landing from '../components/Landing';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App