import { Compact } from '@polkadot/types';
import {
	Balance,
	Index,
	RuntimeDispatchInfo,
} from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

import { SanitizedCall } from './Call';
import { SidecarError } from './Error';
import { SanitizedEvent } from './Event';
import { SanitizedSignature } from './Signature';

export type SanitizedExtrinsic = {
	method: string;
	signature: SanitizedSignature | null;
	nonce: Compact<Index>;
	args: Array<Codec>;
	newArgs: SanitizedCall;
	tip: Compact<Balance>;
	hash: string;
	info?: SidecarError | RuntimeDispatchInfo;
	events: Array<SanitizedEvent>;
	success: string | boolean;
	paysFee: boolean | null;
};
