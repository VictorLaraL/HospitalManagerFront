import { Layout } from "antd";
import SiderLayout from "../SiderLayout/SiderLayout";
import "./LayoutInternal.css";

const { Header, Content, Footer } = Layout;

const LayoutInternal = (props) => {
    return (
        <Layout style={{ height: "100vh" }}>
            <SiderLayout />
            <Layout>
                <Header style={{ background: "#fff" }}>
                    <h2>{props.mainTitle}</h2>
                </Header>
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            background: "#fff",
                            minHeight: 360,
                        }}
                    >
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Hospital Manager ©2021
                </Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutInternal;