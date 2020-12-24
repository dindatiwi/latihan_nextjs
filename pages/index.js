import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionExample } from "../redux/action/example";
import styles from "../styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const onSaveRedux = () => {
    dispatch(actionExample(data));
  };

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <input type="text" onChange={(v) => setData(v.target.value)} />
      <button onClick={onSaveRedux}>SAVE KE REDUX</button>
      <Link href="/about">About</Link>
    </div>
  );
}
