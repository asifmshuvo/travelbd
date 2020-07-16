
import { Layout, Menu, Dropdown, Button } from 'antd';
import {
  DownOutlined,
  ProjectOutlined,
  BulbOutlined,
  BorderHorizontalOutlined,
  FileImageOutlined,
  ApiOutlined,
  SettingOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';

import Link from "next/link";

import styles from "./ContentHeader.module.css";

const { SubMenu } = Menu;
const { Header } = Layout;

function handleProjectClick(e) {
  console.log('click', e);
}

// const projectsMenu = (
//   <Menu onClick={handleProjectClick}>
//     <Menu.Item key="1" icon={<ProjectOutlined />}>
//       Project 1
//     </Menu.Item>
//     <Menu.Item key="2" icon={<ProjectOutlined />}>
//       project 2
//     </Menu.Item>
//     <Menu.Item key="3" icon={<ProjectOutlined />}>
//       project 3
//     </Menu.Item>
//   </Menu>
// );

export const ContentHeader = ({ slug }) => {
  let navKey = slug == 'manage' ? 'content' : slug

  return (

    <Header className={styles.header} style={{ position: 'sticky', top: '0', zIndex: '1', background: '#fff' }}>

      <div className={styles.logo} />

      <Menu theme="lite" mode="horizontal" defaultSelectedKeys={['content']} selectedKeys={[navKey]} className={styles.headerMenu}>
        <Menu.Item key="innovation" icon={<BulbOutlined />}>
          <Link href="">
            <a>Innovation</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="feature" icon={<AppstoreAddOutlined />}>
          <Link href="">
            <a>Features</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="plan" icon={<ApiOutlined />}>
          <Link href="">
            <a>Plans</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="doc" icon={<SettingOutlined />}>
          <Link href="">
            <a>Docs</a>
          </Link>
        </Menu.Item>
        <Button type="primary" className="m-1 ml-4 mr-2">Login</Button>

        <a target="_blank" href="https://forms.gle/opCyB7ufQVa8Es296">
          <Button className="m-1" style={{ background: '#E7ECF3', color: '#9197A0' }}>Early Access</Button>
        </a>

      </Menu>

      {/* <Dropdown overlay={projectsMenu} >
        <Button className={styles.headerDropdown} >
          Project Selected <DownOutlined />
        </Button>
      </Dropdown> */}

    </Header >

  );
};
