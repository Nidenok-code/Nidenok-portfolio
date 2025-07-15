import "app/styles/global.css";
import { Header } from "widgets/header";
import Providers from "./providers";
import Routers from "./routers";

function App() {
  return (
    <Providers>
      <Routers />
    </Providers>
  );
}

export default App;
