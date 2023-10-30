export default {
	name: 'tags',
	type: 'document',
	title: 'Tag liste',

	fields: [
		{
			name: 'Name',
			title: 'Tag navn',
			type: 'string',
		},
		{
			name: 'icon',
			title: 'Tag ikon',
			type: 'image',
		},
	],
}
