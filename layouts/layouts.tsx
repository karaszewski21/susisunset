import Header from '../components/header/header';
import ToolbarBottom from '../components/toolbarbottom/toolbarbottom';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToolbarBottom />
    </>
  );
}
