export const nav = [
	{
		name: 'עמוד הבית',
		sub: [],
		link: '/',
	},
	{
		name: 'אודות',
		sub: [],
		link: '/AboutPage',
	},
	{
		name: 'יעוץ והדרכה הורית',
		sub: [
			{ name: 'יועצת שינה', link: '/' },
			{ name: 'גמילה ממוצץ', link: '/' },
			{ name: 'גמילה מחיתולים', link: '/' },
			{ name: 'הדרכה לגיל הרך', link: '/' },
			{ name: 'הפרעות קשב וריכוז', link: '/' },
		],
	},
	{
		name: 'סדנאות להורים ולאנשי חינוך',
		sub: [
			{ name: 'סדנה 1', link: '/' },
			{ name: 'סדנה 2', link: '/' },
		],
	},
];

export const contact = {
	title: 'צרו קשר',
	title2: 'שיחה יעוץ ראשונה - בחינם',
	detailsForContact: [
		{
			name: '050-4532052',
			icon: '/icons/phone_icon.svg',
			alt: 'טלפון',
		},
		{
			name: 'shalhevetbarak@gmail.com',
			icon: '/icons/mail_icon.svg',
			alt: 'דואר אלקטרוני',
		},
	],
	data: [{ name: 'שם מלא' }, { name: 'מספר טלפון' }, { name: 'אימייל' }],
};
