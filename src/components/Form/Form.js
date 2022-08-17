import styles from "./Form.module.scss";
export function Form() {
  //     const [data, setData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     error: null,
  //     loading: false,
  //   });

  //   const history = useHistory();

  //   const { name, email, password, error, loading } = data;

  //   const handleChange = (e) => {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setData({ ...data, error: null, loading: true });
  //     if (!name || !email || !password) {
  //       setData({ ...data, error: "All fields are required" });
  //     }
  //     try {
  //       const result = await createUserWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       );
  //       await setDoc(doc(db, "users", result.user.uid), {
  //         uid: result.user.uid,
  //         name,
  //         email,
  //         createdAt: Timestamp.fromDate(new Date()),
  //         isOnline: true,
  //       });
  //       setData({
  //         name: "",
  //         email: "",
  //         password: "",
  //         error: null,
  //         loading: false,
  //       });
  //       history.replace("/");
  //     } catch (err) {
  //       setData({ ...data, error: err.message, loading: false });
  //     }
  //   };
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Create An Account</h3>
      <form className={styles.form}>
        <div className={styles.input_container}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div className={styles.btn_container}>
          <button className={styles.btn}>Register</button>
        </div>
      </form>
    </section>
  );
}
