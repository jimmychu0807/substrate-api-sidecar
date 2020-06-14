import { NewArg } from './NewArg';

export type SanitizedCall = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
	method: string;
	callIndex: Uint8Array | string;
	args: NewArg;
};
