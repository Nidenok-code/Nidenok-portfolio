import "app/styles/global.css";
import { Header } from "widgets/header";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <div className="continer">
        <Header />
      </div>
    </Providers>
  );
}

export default App;
