import "app/styles/global.css";

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
