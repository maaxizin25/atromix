import { useContext } from "react";
import { HomePage } from "./pages/homepage";
import { AppContext } from "./context/appContext";
import { ResultPage } from "./pages/resultPage";

function App() {
  const { currentStep } = useContext(AppContext);
  return <>{currentStep < 2 ? <HomePage /> : <ResultPage />}</>;
}

export default App;
