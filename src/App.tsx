import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboards";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

