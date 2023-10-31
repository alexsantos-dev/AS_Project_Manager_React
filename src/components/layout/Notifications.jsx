import { useState, useEffect} from "react";
import styles from "./Notifications.module.css";

function Notifications() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mensagens", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMensagens(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const notifications = mensagens.length;

  return (
    <>
      {notifications > 0 && (
        <div className={styles.not_icon}>{notifications}</div>
      )}
    </>
  );
}

export default Notifications;
