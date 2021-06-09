// https://lldev.thespacedevs.com/2.2.0/launch/?net__gt=2021-06-10T12%3A04%3A22Z
export default interface Launch {
	id: string;
	name: string;
	image: string;
	net: string;
	rocket: {
		configuration: {
			family: string;
		};
	};
	pad: {
		location: {
			name: string;
		};
	};
}
