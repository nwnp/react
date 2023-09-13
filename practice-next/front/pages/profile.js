import Head from "next/head";
import AppLayout from "../components/AppLayout";

const profile = () => {
  return (
    <>
      <AppLayout>
        <Head>
          <title>내 프로필 | NodeBird</title>
        </Head>
        <div>프로필</div>
      </AppLayout>
    </>
  );
};

export default profile;
