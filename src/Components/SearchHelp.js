import styles from "./SearchHelp.module.css";

function SearchHelp() {
  return (
    <div className={styles.page}>
      <div>How can we help?</div>
      <input type="text" placeholder="Search" className={styles.search} />
    </div>
  );
}

export default SearchHelp;
