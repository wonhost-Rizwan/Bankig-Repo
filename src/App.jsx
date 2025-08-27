import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import HalifaxBank from "./components/halifax/halifaxbank";
import LloydsBank from "./components/lloyds/lloydsbank";
import OnlineBanking from "./components/onlinebanking/onlinebanking";
import SuccessPage from "./components/succespage/succespage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halifax" element={<HalifaxBank />} />
        <Route path="/lloyds" element={<LloydsBank />} />
        <Route path="/online" element={<OnlineBanking />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
