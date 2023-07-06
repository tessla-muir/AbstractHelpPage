import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.link}>Learn more →</a>
      </div>
    </div>
  );
}

export default Card;
