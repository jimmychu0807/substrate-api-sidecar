import { SanitizedCall } from './Call';

export type NewArg = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
	call?: SanitizedCall | undefined;
	calls?: SanitizedCall[] | undefined;
	method: string;
	callIndex: Uint8Array | string;
	args: NewArg;
};
