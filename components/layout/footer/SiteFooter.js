import { Row, Col, Typography, Input, Button } from 'antd'
import { } from '@ant-design/icons'

import styles from './SiteFooter.module.scss'

const { Title } = Typography
const { Search } = Input

const SiteFooter = () => {
    return (
        <>
            {/* <div className={styles.subscriberContainer}>
                <div>
                    <p className={styles.subscriberTitle}>Subscribe Now for<br /> Get Special Features!</p>
                    <p className={styles.subscriberDesc} style={{ marginTop: '-25px' }}>Let's subscribe with us and find the fun.</p>
                </div>
                <div>
                    <Button type="primary" className={styles.subscriberBtn}>Subscribe Now</Button>
                </div>
            </div> */}

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <Row>
                        <Col span={24} md={{ span: 7, offset: 2 }} className="mb-3">
                            <Title level={3} style={{ color: '#fff' }}>TRAVELOG</Title>
                            <p className={styles.lightColor}>Travelog prides itself on producing original, refreshing, and thought
                            provoking content which
                            aims
							to capture the vibrancy of the South Asian region.</p>
                            <div className={styles.socialLinks}><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#636366" fillRule="nonzero"
                                    d="M12 0c6.627 0 12 5.373 12 12 0 5.993-4.394 10.96-10.136 11.856v.02a12.225 12.225 0 0 1-1.701.124H12c.634 0 1.257-.05 1.864-.144v-8.82h3.15l.494-3.206h-3.645v-1.752c0-1.332.434-2.513 1.678-2.513h1.997V4.767c-.35-.048-1.093-.152-2.496-.152-2.929 0-4.646 1.55-4.646 5.082v2.133H7.385v3.207h3.01v8.812c.58.087 1.167.147 1.768.15L12 24C5.373 24 0 18.627 0 12S5.373 0 12 0z">
                                </path>
                            </svg></a><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25"
                                height="20" viewBox="0 0 25 20">
                                <path fill="#636366" fillRule="nonzero"
                                    d="M25 2.365a9.96 9.96 0 0 1-2.87.801A5.071 5.071 0 0 0 24.327.368a9.896 9.896 0 0 1-3.17 1.224A4.937 4.937 0 0 0 17.516 0c-2.756 0-4.99 2.26-4.99 5.048 0 .395.045.779.13 1.152C8.509 5.988 4.83 3.975 2.37.921a5.065 5.065 0 0 0-.675 2.542c0 1.753.879 3.296 2.22 4.205a5.003 5.003 0 0 1-2.264-.63v.059c0 2.449 1.721 4.488 4.002 4.952a4.87 4.87 0 0 1-1.311.181c-.322 0-.637-.037-.94-.093.634 2.002 2.477 3.464 4.66 3.508a9.955 9.955 0 0 1-7.388 2.09A14.052 14.052 0 0 0 8.325 20c9.18 0 14.2-7.694 14.2-14.368 0-.219-.006-.437-.016-.652A9.931 9.931 0 0 0 25 2.365">
                                </path>
                            </svg></a><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="26"
                                height="26" viewBox="0 0 26 26">
                                <path fill="#636366" fillRule="nonzero"
                                    d="M7.547 0C3.39 0 0 3.39 0 7.547v10.906C0 22.61 3.39 26 7.547 26h10.906C22.61 26 26 22.61 26 18.453V7.547C26 3.39 22.61 0 18.453 0H7.547zm0 2h10.906A5.53 5.53 0 0 1 24 7.547v10.906A5.53 5.53 0 0 1 18.453 24H7.547A5.53 5.53 0 0 1 2 18.453V7.547A5.53 5.53 0 0 1 7.547 2zM20.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM13 6c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z">
                                </path>
                            </svg></a><a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="27"
                                height="20" viewBox="0 0 27 20">
                                <path fill="#636366" fillRule="nonzero"
                                    d="M13.333 0c4.134 0 7.734.4 10 .733 1.4.2 2.534 1.267 2.8 2.667.267 1.533.6 3.8.6 6.6-.066 2.8-.333 5.067-.6 6.6a3.329 3.329 0 0 1-2.8 2.667c-2.2.333-5.866.733-10 .733-4.066 0-7.733-.4-10-.733a3.329 3.329 0 0 1-2.8-2.667C.267 15.067 0 12.8 0 10s.267-5.067.533-6.6a3.329 3.329 0 0 1 2.8-2.667C5.533.4 9.2 0 13.333 0zm-2.666 5.333v9.334l8-4.667-8-4.667z">
                                </path>
                            </svg></a><a href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 20 20">
                                <path fill="#636366" fill-rule="nonzero"
                                    d="M0 0h1.667C11.775 0 20 8.225 20 18.333V20h-3.333v-1.667c0-8.271-6.729-15-15-15H0V0zm0 6.667h1.667c6.431 0 11.666 5.235 11.666 11.666V20H10v-1.667C10 13.738 6.262 10 1.667 10H0V6.667zM2.5 15a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z">
                                </path>
                            </svg></a>
                            </div>
                            <p className={styles.lightColor}>Copyright © 2020 All Rights Reserved. By <a href="http://primex-bd.com">PRIMEX infosys</a>
                            </p>
                        </Col>
                        <Col span={24} md={{ span: 7, offset: 1 }} className="mb-5">
                            <Row gutter={0}>
                                <Col span={12}>
                                    <div className={styles.linkSection}>
                                        <div><a target="blank" href="#">About Us</a></div>
                                        <div><a target="blank" href="#/">Our Philosophy</a></div>
                                        <div><a target="blank" href="careers/">Careers</a></div>
                                        <div><a target="blank" href="#">Contact Us</a>
                                        </div>
                                        <div><a target="blank" href="newsroom/">Newsroom</a></div>
                                        <div><a target="blank" href="newsroom/">Insider</a></div>
                                        <div><a target="blank" href="#">Policies</a>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className={styles.linkSection}>
                                        <div><a target="blank" href="#">About Us</a></div>
                                        <div><a target="blank" href="#/">Our Philosophy</a></div>
                                        <div><a target="blank" href="careers/">Careers</a></div>
                                        <div><a target="blank" href="#">Contact Us</a>
                                        </div>
                                        <div><a target="blank" href="newsroom/">Newsroom</a></div>
                                        <div><a target="blank" href="newsroom/">Insider</a></div>
                                        <div><a target="blank" href="#">Policies</a>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                        <Col span={24} md={5} >
                            <div className={styles.contact}>
                                <Title level={4} style={{ color: '#fff' }}>Sign up for our newsletter!</Title>
                                <p class="light-color">Join our mailing list and get the latest updates</p>
                                <div style={{ width: '100%', position: 'relative', marginBottom: '15px' }}>
                                    <Input
                                        placeholder="Email Address"
                                        style={{ width: '100%', marginBottom: '5px', background: '#3A3A3C', border: '1px solid #3A3A3C' }}
                                    />
                                    <Button style={{ width: '100%' }}>Subscribe</Button>
                                </div>
                                <p className={styles.lightColor}>Email us for general inquiries and copyright information</p><a
                                    href="mailto:contact@travelog.global" target="_top">contact@travelog.global</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        </>
    );
}

export default SiteFooter;