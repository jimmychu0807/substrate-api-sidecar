import Address from '@polkadot/types/generic/Address';
import {
	EcdsaSignature,
	Ed25519Signature,
	Sr25519Signature,
} from '@polkadot/types/interfaces';

export type SanitizedSignature = {
	signature: EcdsaSignature | Ed25519Signature | Sr25519Signature;
	signer: Address;
};
