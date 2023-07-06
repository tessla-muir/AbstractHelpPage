import styles from "./MainPage.module.css";
import SearchHelp from "../Components/SearchHelp.js";
import Card from "../Components/Card.js";

const CARDS = [
  {
    id: 1,
    title: "Using Abstract",
    description:
      "Abstract lets you manage, version, and document your designs in one place.",
    img: "//theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
    link: "https://tessla-muir.com/about",
  },
  {
    id: 2,
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
    img: "//theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
    link: "https://tessla-muir.com/about",
  },
  {
    id: 3,
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    img: "//theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
    link: "https://tessla-muir.com/about",
  },
  {
    id: 4,
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    img: "//theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
    link: "https://tessla-muir.com/about",
  },
  {
    id: 5,
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    img: "//theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
    link: "https://tessla-muir.com/about",
  },
  {
    id: 6,
    title: "Abstract support",
    description: "Get in touch with a human.",
    img: "//theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
    link: "https://tessla-muir.com/about",
  },
];

function MainPage() {
  return (
    <div>
      <SearchHelp />
      <div className={styles.cardholder}>
        {CARDS.map((card) => (
          <Card
            title={card.title}
            description={card.description}
            img={card.img}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
