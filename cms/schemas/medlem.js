export default {
	name: 'medlem',
	type: 'document',
	title: 'Medlemsbedrift',

	fields: [
		{
			title: 'Navn',
			name: 'name',
			type: 'string',
			description: 'Bedriftsnavn som skal vises på siden.',
		},
		{
			title: 'Logo',
			name: 'logo',
			type: 'image',
			description: 'Legg til logo til bedriften.',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'richText',
			name: 'richText',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
		{
			title: 'Video lenke',
			name: 'video',
			type: 'youtube',
			description: 'Legg til YouTube film lenken for å vise innebygget YouTube film på side.',
		},

		{
			title: 'Adresse',
			name: 'address',
			type: 'string',
			description: 'Legg til adressen til bedriften.',
		},
		{
			title: 'Postnummer',
			name: 'zip',
			type: 'string',
			description: 'Legg til postnummer til bedriften.',
		},
		{
			title: 'Kontaktperson',
			name: 'contactPerson',
			type: 'array',
			of: [
				{
					type: 'contactPerson',
				},
			],
			description: 'Legg til kontaktpersoner fra forskjellige avdelinger.',
		},
		{
			title: 'Sertifiseringer',
			name: 'certifications',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'certifications' },
				},
			],
			description: 'Legg til sertifiseringer til bedriften. Sertifiseringer vil bli vist i den rekkefølgen de ligger i. Dra sertifiseringene for å endre rekkefølge på de.',
		},
		{
			title: 'Tilknytninger',
			name: 'connections',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'connections' },
				},
			],
			description: 'Legg til tilknytninger som bedriften har.',
		},
		{
			title: 'Hovedsamarbeidspartner',
			name: 'MainSponsor',
			type: 'boolean',
			description: 'Aktiver om bedriften er hovedsamarbeidspartner. Dette vil også generere et kort under hovedsamarbeidspartnere på forsiden.',
		},
		{
			title: 'Sponsorkort tekst',
			name: 'sponsorCardText',
			type: 'string',
			hidden: ({ document }) => !document?.MainSponsor,
			description: 'Skriv inn teksten som skal vises på hovedsamarbeidspartnerkortet på forsiden.',
		},
		{
			title: 'Samarbeidspartner',
			name: 'SecondarySponsor',
			type: 'boolean',
			description: 'Aktiver om bedriften er hovedsamarbeidspartner. Dette vil også generere et kort under samarbeidspartnere på forsiden.',
		},
		{
			title: 'Sponsorkort tekst',
			name: 'SecondarysponsorCardText',
			type: 'string',
			hidden: ({ document }) => !document?.SecondarySponsor,
			description: 'Skriv inn teksten som skal vises på samarbeidskortet på forsiden.',
		},

		{
			title: 'Kart visning',
			name: 'ActiveMap',
			type: 'boolean',
			description: 'Aktiver for å vise kartet på siden til bedriften.',
		},
		{
			title: 'Kart',
			name: 'location',
			type: 'geopoint',
			hidden: ({ document }) => !document?.ActiveMap,
			description: 'Søk etter adressen til bedriften og plasser pinnen der bedriften holder til.',
		},

		{
			title: 'Tags',
			name: 'tag',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'tags' },
				},
			],
			description: 'Legg til tags som angår bedriften. Tagsen vil bli vist i den rekkefølgen de ligger i. Dra tagsene for å endre rekkefølge på de. ',
		},

		{
			name: 'website',
			title: 'Nettside',
			type: 'url',
			description: 'Legg til lenke til hjemmesiden til bedriften.',
		},
		{
			title: 'Medlemspraten',
			name: 'medlemspraten',
			type: 'object',
			fields: [
				{
					title: 'Link',
					name: 'link',
					type: 'url',
					description: 'Legg til link til artikkel.',
				},
				{
					title: 'Link tekst',
					name: 'text',
					type: 'string',
					description: 'Skriv inn link teksten som skal vises',
				},
			],
		},
		{
			title: 'Medlemsklubben',
			name: 'medlemsklubben',
			type: 'object',
			fields: [
				{
					title: 'Link',
					name: 'clubLink',
					type: 'url',
					description: 'Legg til link til artikkel.',
				},
				{
					title: 'Link tekst',
					name: 'clubText',
					type: 'string',
					description: 'Skriv inn link teksten som skal vises',
				},
			],
		},
		{
			title: 'Tekst',
			name: 'text',
			type: 'string',
			description: 'Tekst som skal vises på siden til bedriften.',
		},
		{
			title: 'Sosiale media',
			name: 'sosialMedia',
			type: 'object',
			fields: [
				{
					title: 'Facebook link',
					name: 'facebookLink',
					type: 'url',
					description: 'Legg til link til Facebook siden.',
				},
				{
					title: 'Linkedin',
					name: 'linkedinLink',
					type: 'string',
					description: 'Legg til link til LinkedIn siden.',
				},
			],
		},

		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
			},
			validation: (Rule) => Rule.required(),
			description: 'Klikk "generate" knappen for å automatisk legge til bedrift i medlemslisten.',
		},
	],
}
