export default function Home() {
  console.log(process.env.MY_SECRET_KEY);

  return (
    <main>
      <h1>Day 15</h1>
      <p>Environment variable test</p>
    </main>
  );
}