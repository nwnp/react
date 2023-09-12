import AppLayout from "../components/AppLayout";
import Link from "next/link";

const home = () => {
  return (
    <AppLayout>
      <Link href="/">
        <a>노드버드</a>
      </Link>
      <Link href="/profile">
        <a>프로필</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    </AppLayout>
  );
};

export default home;
