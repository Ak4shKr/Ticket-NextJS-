import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "30px" }}>There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the <Link href="/">dashboard</Link>.
      </p>
    </main>
  );
}
