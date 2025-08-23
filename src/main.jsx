import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CutOffProvider} from './Context/StateContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <Router>
    <CutOffProvider>
    <App/>
    </CutOffProvider>
  </Router>,
)
