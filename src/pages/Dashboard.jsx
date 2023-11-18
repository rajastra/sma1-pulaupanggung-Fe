import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, HomeFilled, TeamOutlined, SplitCellsOutlined, UserAddOutlined, LockOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from 'react-router-dom';

import logo from '../assets/sma.png';
import profile from '../assets/profile.png';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [percentage, setPercentage] = useState(50);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical">
          <div className="image-sidebar-sekolah">
            <img className="logo-sidebar" src={logo} alt="logo sekolah" />
          </div>
          <div className="name-sidebar-sekolah">
            <h5 className="logo-sidebar-name">SMA N 1 PULAU PANGGUNG</h5>
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/dashboard']}
          items={[
            {
              key: '/dashboard',
              icon: <HomeFilled />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: '/guruandtendik',
              icon: <UserOutlined />,
              label: <Link to="/guruandtendik">Guru & Tendik</Link>,
            },
            {
              key: '/murid',
              icon: <TeamOutlined />,
              label: <Link to="/murid">Murid</Link>,
            },
            {
              key: '/kelas',
              icon: <SplitCellsOutlined />,
              label: <Link to="/kelas">Kelas</Link>,
            },
            {
              key: '/postingan',
              icon: <UploadOutlined />,
              label: <Link to="/postingan">Postingan</Link>,
            },
            {
              key: '/admin',
              icon: <UserAddOutlined />,
              label: <Link to="/admin">Admin</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#6B8E23',
          }}
        >
          <div className="header-name-bar">
            <div className="logo-name-bar">
              <UserOutlined />
            </div>
            <div className="name-bar">susanti</div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 112px)',
              background: colorBgContainer,
            }}
          >
            <div className="header-container-dashboard">
              <div className="header-dashboard">
                <div className="header-text-dashboard">
                  <div className="header-name-dashboard">
                    <h3>Dashboard</h3>
                  </div>
                  <div className="header-line-dashboard">
                    <hr className="line-header-dashboard" />
                    <hr className="line-sub-header-dashboard" />
                  </div>
                </div>

                <div className="profile-pengguna-dashboard">
                  <div className="profile-pengguna-text-dashboard">
                    <div>
                      <h5>Profil Pengguna</h5>
                    </div>
                  </div>
                  <div className="profile-pengguna-ubah-password-dashboard">
                    <div className="icon-lock-dashboard">
                      <LockOutlined />
                    </div>
                    <div>
                      <span className="text-ubah-password">Ubah Password</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-container-dashboard">
              <div className="card-bio-dashboard">
                <div className="img-card-bio-dashboard">
                  <img className="image-card-bio-dashboard" src={profile} alt="" />
                </div>
                <div className="bio-card-data-dashboard">
                  <div className="nip-card-bio-dashboard">
                    <span className="NIP">NIP</span>
                  </div>
                  <div className="value-nip-card-bio-dashboard">
                    <span className="value-nip">XXXXXXXXX</span>
                  </div>
                  <hr />
                  <div className="name-card-bio-dashboard">
                    <span className="NAME">Nama</span>
                  </div>
                  <div className="value-name-card-bio-dashboard">
                    <span className="value-name">Susanti</span>
                  </div>
                </div>
              </div>
              <div className="container-card-data-content-dashboard">
                <div className="container-card-data-dashboard">
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                  <div className="card-header-data-dashboard">
                    <span className="name-header-data-dashboard">2023/2024</span>
                    <span className="name-content-data-dashboard">Tahun Ajaran</span>
                  </div>
                </div>
                <div className="container-card-statistik-dashboard">
                  <div className="card-statistik-murid-dashboard">
                    <div className="header-statistik-murid-dashboard">
                      <h5>Statistik Data Murid</h5>
                    </div>
                    <div className="content-statistik-murid-laki-dashboard">
                      <span>Murid Laki-laki :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>

                    <div className="content-statistik-murid-perempuan-dashboard">
                      <span>Murid Perempuan :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-statistik-gurutendik-dashboard">
                    <div className="header-statistik-murid-dashboard">
                      <h5>Statistik Data Guru & Tendik</h5>
                    </div>
                    <div className="content-statistik-murid-laki-dashboard">
                      <span>Guru :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>

                    <div className="content-statistik-murid-perempuan-dashboard">
                      <span>Tendik :</span>
                      <span>xx</span>
                      <div className="percentage-bar">
                        <div className="progress" style={{ width: `${percentage}%` }}>
                          {percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;