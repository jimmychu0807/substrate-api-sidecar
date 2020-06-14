import { Compact } from '@polkadot/types';
import AccountId from '@polkadot/types/generic/AccountId';
import { BlockHash, BlockNumber, Hash } from '@polkadot/types/interfaces';

import { Hook, Log, SanitizedExtrinsic } from '../sanitized';

export type BlockResponse = {
	number: Compact<BlockNumber>;
	hash: BlockHash;
	parentHash: Hash;
	stateRoot: Hash;
	extrinsicsRoot: Hash;
	authorId: AccountId | undefined;
	logs: Array<Log>;
	onInitialize: Hook;
	extrinsics: Array<SanitizedExtrinsic>;
	onFinalize: Hook;
};
