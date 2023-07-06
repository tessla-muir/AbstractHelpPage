import MainHeader from "./Header/MainHeader";
import MainPage from "./Pages/MainPage";
import MainFooter from "./Footer/MainFooter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainPage />
      <MainFooter />
    </div>
  );
}
