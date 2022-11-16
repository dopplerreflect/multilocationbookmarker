export type Location = {
	uuid: string;
	name: string;
	coordinates: string;
	address?: string;
};

export type Locations = Location[];

export type Site = {
	uuid: string;
	name: string;
	url: string;
};

export type Sites = Site[];
