import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
import OpenAtTop from "./components/utils/OpenAtTop";

const App = () => {
  return (
    <Router>
      <OpenAtTop />
      <AppContent />
    </Router>
  );
};

export default App;
