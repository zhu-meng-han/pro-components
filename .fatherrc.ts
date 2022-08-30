import { readdirSync } from 'fs';
import { join } from 'path';

// utils must build before core
// runtime must build before renderer-react
// components dependencies order: form -> table -> list
const headPkgs: string[] = ['skeleton', 'title', 'components'];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

export default {
  cjs: false,
  esm: {
    type: 'babel',
  },
  runtimeHelpers: true,
  pkgs: [...headPkgs, ...tailPkgs],
};
