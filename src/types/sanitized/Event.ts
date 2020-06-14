import { EventData } from '@polkadot/types/generic/Event';

export type SanitizedEvent = {
	method: string;
	data: EventData;
};
