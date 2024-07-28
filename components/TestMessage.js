import React, { useEffect } from 'react';
import { message } from 'antd';

const TestMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    messageApi.info(`Welcome: ${userData.user}`);
  }, [messageApi]);

  return <>{contextHolder}</>;
};

export default TestMessage;