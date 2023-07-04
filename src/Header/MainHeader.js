import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAdtJREFUSEvFlottwkAMhu1NYBLKJJRJSiYpTFI6Sekkrv7IPjm+ZyhSIkUKJOfPz/+OaYOLN2DSKqiI7IgINzHzXUTe9fm6xvkhqIh8ENGb3rB/ZeaziHwS0Qwmoof+P/UcaEI1MhgG0F8lqL0H/IxM1OA9qFQWtqC2ZM/McCC7elDU76ewrgc9as13JXAGFRGkEimdU6QpjuAW1IALO97xEvRLa5hqUwDDoat2L5ps7mgi8kDYwXVn5mMVqkYQZdYUCj4x86I79X9E9dDM4NmAZmd20n4sIhURpNG8Hu5G+1BLE4FZtBFa69aFp7VRKGQqOc7M+yzSxgKoz6iI1Lo91RsPyZhCD4Uovn09alG6FPvG8p/fTDCGIuiB1r73kaLrSpH+rowUWtzMWISWOg+jkJqgF5WIdJvRQ1tN8N/uha9Ji+PImBrFgGalGYgSqfXikpb4CYhQdN4lGPfSdoiKhG91v8VoTZXRu/h1EYoUI9qWlkKTJ9VeL3lpEw/grCdquwzAJfG2JNguEzNTAmelKc4pRBz7YENLa1A45cFj+6lTllY3t6AGRoRPnxx8jXvpNeDzZyTtTER8qpwGfU1fcxqMc+k2bIwHTg7zKXFkhr2tbQW/pzavfP8H6kk7LdD8D+MAAAAASUVORK5CYII="
            alt="logo"
          />
          <bolder className={styles.title}> Abstract </bolder>
        </div>
        <div className={styles.divider}>Help Center</div>
        <div className={styles.buttons}>
          <button>Submit a Request</button>
          <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
