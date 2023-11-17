import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "30px" }}>We Hit a Brick Wall.</h2>
      <p>We could not find the ticket you were looking for.</p>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>.
      </p>
    </main>
  );
}
