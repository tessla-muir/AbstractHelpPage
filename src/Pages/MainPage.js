import styles from "./MainPage.module.css";
import SearchHelp from "../Components/SearchHelp.js";
import Card from "../Components/Card.js";

function MainPage() {
  return (
    <div>
      <SearchHelp />
      <Card
        title="Billing"
        description="Access payment options."
        link="https://tessla-muir.com/about"
      />
    </div>
  );
}

export default MainPage;
