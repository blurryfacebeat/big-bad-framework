export type FunctionalComponent<P = any> = {
  (props: P): VNode;
};

export type VNodeType = string | FunctionalComponent;

export type VNode = {
  type: VNodeType;
  props: {
    [key: string]: any;
    children: Array<VNode | string>;
  };
};
