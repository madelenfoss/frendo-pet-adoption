export default {
	title: 'Dog',
	name: 'dog',
	type: 'document',
	fields: [
		{
			title: 'Dog name',
			name:	'dogName',
			type: 'string',
		},
		{
			title: 'slug',
			name: 'slug',
			options: {
				source: 'dogName'
			}
		},
		{
			title: 'Breed',
			name: 'breed',
			type: 'string',
		}
	]
}