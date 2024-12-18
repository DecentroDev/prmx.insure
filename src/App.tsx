import AppRouter from "./routes";
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <AppRouter />
      <Toaster duration={4000} />
    </>
  );
}

export default App;
