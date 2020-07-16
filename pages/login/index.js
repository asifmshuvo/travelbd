import Link from 'next/link'
import { Row, Col, Form, Typography, Button, Input } from 'antd';
import { MailOutlined, KeyOutlined, CheckCircleTwoTone } from '@ant-design/icons'

import styles from './login.module.css'

const { Title, Text } = Typography;

const validateMessages = {
    required: '${label} is required!',
};

const Login = () => {

    const onFinish = values => {
        const user = values.user;
    };

    return (
        <>
            <div className={styles.logoWrapper}>
                <Link href="/">
                    <a><div className={styles.logo} /></a>
                </Link>
            </div>
            <Row className={styles.mainRow}>
                <Col md={12} className={styles.leftColumn}>
                    <div className={styles.colContentWrapper}>
                        <div className={styles.leftColLogo}></div>
                    </div>
                </Col>
                <Col md={12} xs={24} className={styles.rightColumn}>
                    <div className={styles.colContentWrapper}>
                        <div className={styles.formWrapper}>
                            <Form name="nest-user" layout={'vertical'} onFinish={onFinish} validateMessages={validateMessages} initialValues={{ remember: false }}>
                                <Form.Item >
                                    <div style={{ display: 'flex', direction: 'row', justifyContent: 'space-between' }}>
                                        <Title level={3}><Text className={styles.formTitle}>Create instantly, <br />Deliver in time.</Text></Title>
                                    </div>
                                </Form.Item>
                                <Form.Item name={['user', 'email']} rules={[{ required: true }]}>
                                    <Input size="large" prefix={<MailOutlined style={{ marginRight: '4px' }} />} placeholder="Email or Username" />
                                </Form.Item>
                                <Form.Item name={['user', 'password']} rules={[{ type: 'string' }]}>
                                    <Input size="large" prefix={<KeyOutlined style={{ marginRight: '4px' }} />} placeholder="Secret " />
                                </Form.Item>
                                <div className={styles.rememberWrapper}>
                                    <Text> <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '5px' }} />Remember Me?</Text>
                                    <Text>Forget Your Password?</Text>
                                </div>

                                <div className="mt-5">
                                    <Button type="primary" className={styles.btn, styles.btnLogin} size="medium" htmlType="submit" >
                                        LOGIN
                                </Button>
                                    <Button type="primary" className={styles.btn, styles.btnDisable} size="medium" htmlType="submit" >
                                        Create Account
                                </Button>

                                </div>


                                <div className="mt-5">
                                    <Text>Or Login With...</Text>
                                    <div className={styles.authLogoWrapper}>
                                        <div className={styles.google}></div>
                                        <div className={styles.github}></div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Login;