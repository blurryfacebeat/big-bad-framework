import { VNode, VNodeType } from './vdom.types';

export const createElement = (
  type: VNodeType,
  props: Record<string, any> | null,
  ...children: Array<VNode | string | boolean | null | undefined>
): VNode => {
  return {
    type,
    props: {
      ...(props || {}),
      children: children
        .flat()
        .filter((child) => child !== false && child !== null && child !== undefined)
        .map((child) => (typeof child === 'object' ? child : String(child))),
    },
  };
};
