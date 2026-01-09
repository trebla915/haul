import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SimplePage from './components/SimplePage'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimplePage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
