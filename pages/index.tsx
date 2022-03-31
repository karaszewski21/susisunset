import type {
  GetServerSideProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Link from 'next/link';

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
      <h1>home</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://susana-api.herokuapp.com/`);
  const users: User[] = await res.json();
  return { props: { users } };
};

export default Home;
