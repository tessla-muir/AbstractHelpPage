import styles from "./SearchHelp.module.css";

function SearchHelp() {
  return (
    <div className={styles.search}>
      <div>How can we help?</div>
      <div className={styles.formholder}>
        <div className={styles.form}>
          <input type="text" placeholder="Search" className={styles.input} />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchHelp;
