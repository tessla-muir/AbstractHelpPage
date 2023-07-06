import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAAAXNSR0IArs4c6QAAAbZJREFUWEftmT0vREEYhZ/TqTRKjY0KiUQheomOgkQ0RCO0GxEFv0AholUJCqUQkYhStZ1IViNim41K4heMDCtZd+/37ty1MtPe9+PMc9+5yT0jemiph7Tyf8UaY0aAcaCvQ2+kDlQkfaSpl0jWGDMMrAOLQClN0Rwxd8CppJO43Fixxpg9YDtH87wpj8CupKuwApFijTEVYDJv1zbzNiUdBGuEiu0C0bC9jUp6an7QIrYxo89tkulE+pmklSSxRc9p3MZKkl5/AsLIvjg89VmJb0naDxXb+I5Ws1Z0GH8taTZK7BJw7rB51tJ1SYNRYleB46wVHca/SxrwYh0Q9mQdQP0q6cl6sn4MXM2AJ+vJfhPw31lXk+DJerJJB2wGuHWFKUfdqqSxqD+FfiCVSZajcZ6UI0kbcb/ilqwl/BfWvKSLOLHWBYl18wraRU3SUHOvKK/roeHDFqQrtE1Z0mEasXPAZReVWoN5Ktg/zvIsAy22YwEbsFbrmiTr1f5aSWayteV3gOUCRNYsnOCrTxyDoDBjjB30BWAamOjgncIbcA/cNJ/6KDCJdwoFEE3dwotNjSpj4CcHlsAsx/fVgAAAAABJRU5ErkJggg=="
            alt="logo"
          />
          <bolder className={styles.title}> Abstract </bolder>
        </div>
        <div className={styles.divider}>Help Center</div>
        <div className={styles.buttons}>
          <button>Submit a request</button>
          <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
