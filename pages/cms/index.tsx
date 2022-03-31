import type { GetServerSideProps, NextPage } from 'next';

interface User {
  name: string;
  age: number;
}

interface Props {
  users: User[];
}

export const Cms: NextPage<Props> = ({ users }: Props) => {
  const data = users.map((element, index) => (
    <p key={index}> {element.name}</p>
  ));
  return (
    <>
      <h2>Cms</h2>
      <div>{data}</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://susana-api.herokuapp.com/`);
  const users: User[] = await res.json();
  return { props: { users } };
};

export default Cms;
