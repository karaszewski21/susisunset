import Link from 'next/link';
export default function Header() {
  return (
    <>
      <Link href="/cms">
        <a>cms</a>
      </Link>
      <Link href="/creator">
        <a>creator</a>
      </Link>
    </>
  );
}
