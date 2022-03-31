import type {
  GetServerSideProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
interface User {
  name: string;
  age: number;
}

interface Props {
  users: User[];
}

export const Home: NextPage<Props> = ({ users }: Props) => {
  const data = users.map((element, index) => (
    <p key={index}> {element.name}</p>
  ));
  return (
    <>
      <Link href="/contact"></Link>
      <div>{data}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://susana-api.herokuapp.com/`);
  const users: User[] = await res.json();
  return { props: { users } };
};

export default Home;
