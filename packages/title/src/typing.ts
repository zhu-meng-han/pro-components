import React from 'react';

export const tuple = <T extends string[]>(...args: T) => args;
export type LiteralUnion<T extends U, U> = T | (U & {});
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

export const PresetColorTypes = tuple('success', 'default', 'error', 'primary', 'warning');

export type PresetColorType = ElementOf<typeof PresetColorTypes>;

export function isPresetColor(color?: string): boolean {
  return (PresetColorTypes as any[]).indexOf(color) !== -1;
}

export type ProTitleProps = {
  /**
   * @description 自定义竖线的颜色
   * @default default
   */
  color?: LiteralUnion<PresetColorType, string>;
  /**
   * @description 标题内容
   */
  title?: string | React.ReactNode;

  [propName: string]: any;
};
