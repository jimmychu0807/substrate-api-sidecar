import { Codec } from '@polkadot/types/types';

export type Log = {
	type: string;
	index: number;
	value: Codec;
};
