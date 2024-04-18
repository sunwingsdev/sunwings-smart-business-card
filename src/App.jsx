import { useEffect, useState } from "react";
import AuthProvider from "./providers/AuthProvider";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import logoAnimation from "../src/assets/logoAnimation.mp4";
// import logo from "../src/assets/info_card_logo.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (isFirstVisit) {
      setIsFirstVisit(false);
    } else {
      // Simulating data loading
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isFirstVisit]);
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center bg-white">
          <div className="w-48">
            <video autoPlay loop muted>
              <source src={logoAnimation} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <AuthProvider>
          <Provider store={Store}>
            <Toaster />
            <RouterProvider router={router} />
          </Provider>
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
