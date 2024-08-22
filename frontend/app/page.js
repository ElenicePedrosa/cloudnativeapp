import Image from "next/image";

export default function Home() {
  return (
    <>
<Head>
<title>Cloud Native App</title>
<meta name="description" content="Cloud Native App" />
<meta name="viewport" content="width=device-width, initial-scale=1"
/>
</Head>
<main className={styles.main}>
<div className={styles.description}>
<p> Welcome to Cloud Native App!
</p>
</div>
</main>
  );
}
