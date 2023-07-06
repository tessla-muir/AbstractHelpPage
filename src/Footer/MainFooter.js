import styles from "./MainFooter.module.css";

function MainFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <h2>Abstract</h2>
        <h4>Start Trial</h4>
        <h4>Pricing</h4>
        <h4>Download</h4>
      </div>
      <div className={styles.list}>
        <h2>Resources</h2>
        <h4>Blog</h4>
        <h4>Help Center</h4>
        <h4>Release Notes</h4>
        <h4>Status</h4>
      </div>
      <div className={styles.list}>
        <h2>Community</h2>
        <h4>Twitter</h4>
        <h4>LinkedIn</h4>
        <h4>Facebook</h4>
        <h4>Dribble</h4>
        <h4>Podcast</h4>
      </div>
      <div className={styles.list}>
        <h2>Company</h2>
        <h4>About Us</h4>
        <h4>Careers</h4>
        <h4>Legal</h4>
        <h4 className={styles.contact}>Contact Us</h4>
        <h4>info@abstract.com</h4>
      </div>
    </div>
  );
}

export default MainFooter;
