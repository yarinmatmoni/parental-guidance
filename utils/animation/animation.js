export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			when: 'beforeChildren',
			staggerChildren: 0.75,
		},
	},
};

export const titleAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.75,
			ease: 'easeOut',
		},
	},
};

export const leftFadeIn = {
	hidden: {
		x: -50,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

export const rightFadeIn = {
	hidden: {
		x: 50,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

export const fade = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: 'easeOut',
		},
	},
};
