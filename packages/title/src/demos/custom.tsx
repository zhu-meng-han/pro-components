import { ProTitle } from '@xforce-ux/title';

export default () => {
  return (
    <>
      <ProTitle title="多彩徽标" color="#2db7f5" />
      <div style={{ marginTop: '24px' }}></div>
      <ProTitle title={<div>多彩徽标</div>} color="#87d068" />
    </>
  );
};
