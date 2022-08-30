import { ProTitle } from '@xforce-ux/title';

export default () => {
  return (
    <>
      <ProTitle title="标题" />
      <div style={{ marginTop: '24px' }}></div>
      <ProTitle title="标题" color="primary" />
      <div style={{ marginTop: '24px' }}></div>
      <ProTitle title="标题" color="error" />
      <div style={{ marginTop: '24px' }}></div>
      <ProTitle title="标题" color="success" />
      <div style={{ marginTop: '24px' }}></div>
      <ProTitle title="标题" color="warning" />
    </>
  );
};
