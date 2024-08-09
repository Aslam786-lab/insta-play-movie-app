import Toaster from "./components/Toaster";
import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./context/SearchContext";
import AppRouter from "./routes/Router";
import "./styles/global.css";
import "./styles/Navbar.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Toaster />
        <AppRouter />
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
