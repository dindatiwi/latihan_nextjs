import { useSelector } from "react-redux";
import styles from "../styles/Home.module.css";

export default function About() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>{state.example.data}</p>
    </div>
  );
}
