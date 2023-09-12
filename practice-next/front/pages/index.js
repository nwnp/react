// import AppLayout from "../components/AppLayout";
import Link from "next/link";
import { Menu } from "antd";

const home = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link href="/">
          <a>노드버드</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default home;
