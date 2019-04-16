export interface IExtensionResult {
  value: string;
  type: string;
}

type DataFn = () => Promise<IExtensionResult>;
type OpenFn = (link: string) => Promise<any>;
type CloseFn = () => void;

declare const output: {
  data: DataFn;
  openURL: OpenFn;
  close: CloseFn;
};

export default output;
