import styles from "./Chat.module.scss";

export function Chat() {
  return (
    <section className={styles.section}>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src="#" alt="#" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              delectus excepturi quod.
            </p>
          </li>
          <li>
            <img src="#" alt="#" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              delectus excepturi quod.
            </p>
          </li>{" "}
          <li>
            <img src="#" alt="#" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              delectus excepturi quod.
            </p>
          </li>{" "}
          <li>
            <img src="#" alt="#" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              delectus excepturi quod.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.chatWrapper}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            expedita cumque eum temporibus nostrum id sint nobis sit, suscipit
            voluptatem voluptatibus corporis earum eius itaque velit iure. Enim,
            nisi harum?
          </p>
        </div>
        <input type="text" />
        <button type="submit">send</button>
      </div>
    </section>
  );
}
