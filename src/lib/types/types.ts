export type Option = {
	name: string;
	value: number;
};

export type FilterValidationError = {
	city: string[];
	state: string[];
	country: string[];
	minPrice: string[];
	maxPrice: string[];
	bedrooms: string[];
	bathrooms: string[];
	server: string[];
};
