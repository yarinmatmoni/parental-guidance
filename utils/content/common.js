export const personalInfo = {
	phoneNumber: {
		display: '050-5432052',
		value: '0505432052',
	},
	email: 'shalhevetbarak@gmail.com',
};

export const whatsAppMessage = 'היי שלהבת...';

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
			{ name: 'יועצת שינה', link: '/Advice&Guidance/Sleep' },
			{ name: 'גמילה ממוצץ', link: '/Advice&Guidance/Pacifier' },
			{ name: 'גמילה מחיתולים', link: '/Advice&Guidance/Diapers' },
			{ name: 'הדרכה לגיל הרך', link: '/Advice&Guidance/Infancy' },
			{ name: 'הפרעות קשב וריכוז', link: '/Advice&Guidance/Attention' },
			{ name: 'סדר יום לילדים', link: '/Advice&Guidance/Schedule' },
			{
				name: 'אינטליגנציה רגשית',
				link: '/Advice&Guidance/EmotionalIntelligence',
			},
			{ name: 'אהבה ללא תנאי', link: '/Advice&Guidance/Love' },
		],
	},
	{
		name: 'סדנאות להורים ולאנשי חינוך',
		sub: [
			{ name: 'סדנה 1', link: '#' },
			{ name: 'סדנה 2', link: '#' },
		],
	},
];

export const contact = {
	title: 'צרו קשר',
	subtitle: 'שיחה יעוץ ראשונה - בחינם',
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
	data: [
		{ name: 'שם מלא', type: 'text', inputName: 'fullName' },
		{ name: 'מספר טלפון', type: 'tel', inputName: 'phoneNumber' },
		{ name: 'אימייל', type: 'email', inputName: 'email' },
	],
};
