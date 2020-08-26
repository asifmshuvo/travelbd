import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Icon from '@ant-design/icons';

const HeartSvg = () => (
  <svg t="1598419628266" class="icon" viewBox="0 0 1024 1024" version="1.1" width="200" height="200"><path d="M754.2 319.7a118.85 118.85 0 0 1-118.75-118.75V64.2H208.4c-39.95 0-72.3 32.35-72.3 72.3v750.25c0 39.9 32.35 72.2 72.3 72.2h607.3c39.9 0 72.25-32.3 72.25-72.2V319.7H754.2z m14.45 478.35H255.3V749.6h513.35v48.45z m0-155H255.3v-48.4h513.35v48.4z m0-154.95H255.3v-48.4h513.35v48.4z m0 0" p-id="6147"></path><path d="M681.9 64.2v136.75c0 39.9 32.35 72.2 72.3 72.2h133.75L681.9 64.2z m0 0" p-id="6148"></path></svg>
);



const HeartIcon = props => <Icon component={HeartSvg} {...props} />;


ReactDOM.render(
  <div className="custom-icons-list">
    <HeartIcon style={{ color: 'hotpink' }} />
  </div>,
  document.getElementById('container'),
);