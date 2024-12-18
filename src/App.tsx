import AppRouter from "./routes";
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}

export default App;
