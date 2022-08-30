import chalk from 'chalk';
import { readdirSync } from 'fs';
import { join } from 'path';

const theme = require('@ant-design/antd-theme-variable');

const headPkgList = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@xforce-ux/${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src')])
  .reduce((acc, val) => acc.concat(val), []);

const isDeploy = process.env.SITE_DEPLOY === 'TRUE';

export default {
  title: 'ProComponents',
  mode: 'site',
  logo: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
  sitemap: { hostname: 'https://procomponents.ant.design' },
  metas: [
    {
      property: 'og:site_name',
      content: 'ProComponents',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content: 'https://procomponents.ant.design/icon.png',
    },
    {
      property: 'og:description',
      content: '🏆 让中后台开发更简单',
    },
    {
      name: 'keywords',
      content: '中后台,admin,Ant Design,ant design,Table,react,alibaba',
    },
    {
      name: 'description',
      content: '🏆 让中后台开发更简单 包含 table form 等多个组件。',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#1890ff',
    },
    {
      name: 'google-site-verification',
      content: '9LDp--DeEC-xOggsHl_t1MlR_1_2O972JpSUu8NZKMU',
    },
  ],
  alias,
  resolve: {
    includes: [...tailPkgList, 'docs'],
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/pro-components',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/pro-components',
      },
    ],
  },
  hash: true,
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  theme: {
    '@s-site-menu-width': '258px',
    '@ant-prefix': 'ant',
    '@root-entry-name': 'variable',
    ...theme,
    '@primary-color': '#1677FF',
    '@error-color': '#ff4d4',
    '@info-color': '#52c41a',
    '@warning-color': '#faad14',
    '@heading-color': 'rgba(255, 255, 255, 0.85)',
    '@text-color': 'rgba(255, 255, 255, 0.65)',
    '@text-color-secondary': 'rgba(255, 255, 255, 0.45)',
    '@border-color-base': '#d9d9d9',
    '@border-color-split': 'rgba(0, 0, 0, 0.06)',
    '@border-radius-base': '4px',
    '@card-radius': '6px',
    '@table-border-radius-base': '6px',
    '@box-shadow-base':
      '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
  },
  extraBabelPlugins: ['@emotion'],
  ignoreMomentLocale: true,
  menus: {
    '/components': [
      {
        title: '架构设计',
        children: ['components.md', 'schema.md'],
      },
      {
        title: '布局',
        children: [
          'layout',
          'components/PageContainer/index',
          'card',
          'components/WaterMark/index',
          'components/StatisticCard/index',
          'components/CheckCard/index',
        ],
      },
      {
        title: '数据录入',
        children: [
          'form',
          'components/FieldSet/index',
          'components/Group/index',
          'components/Dependency/index',
          'components/SchemaForm/index',
          'components/QueryFilter/index',
          'components/StepsForm/index',
          'components/ModalForm/index',
          'components/LoginForm/index',
        ],
      },
      {
        title: '数据展示',
        children: [
          'table',
          'components/EditableTable/index',
          'components/DragSortTable/index',
          'list',
          'description',
        ],
      },
      {
        title: '通用',
        children: ['skeleton', 'field'],
      },
    ],
    '/en-US/components': [
      {
        title: 'Architecture Design',
        children: ['components.en-US.md'],
      },
      {
        title: 'Layout',
        children: [
          'layout',
          'components/PageContainer/index',
          'components/DragSortTable/index',
          'list',
          'card',
        ],
      },
      {
        title: 'Data entry',
        children: [
          'form',
          'components/FieldSet/index',
          'components/Group/index',
          'components/Dependency/index',
          'components/SchemaForm/index',
          'components/QueryFilter/index',
          'components/StepsForm/index',
          'components/ModalForm/index',
          'components/LoginForm/index',
        ],
      },
      {
        title: 'Data Display',
        children: ['table', 'components/EditableTable/index', 'list', 'description'],
      },
      {
        title: 'General',
        children: ['skeleton', 'field'],
      },
    ],
  },
  ssr: isDeploy ? {} : undefined,
  webpack5: {},
  exportStatic: {},
};
