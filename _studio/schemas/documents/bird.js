export default {
	title: 'Bird',
	name: 'bird',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name:	'name',
			type: 'string'
		},
		{
			title: 'slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		{
			title: 'Breed',
			name: 'breed',
			type: 'string'
		},
		{
			title: 'Sex',
			name: 'sex',
			type: 'string',
			options: {
				list: [
					'Male',
					'Female'
				]
			}
		},
		{
			title: 'Age',
			name: 'age',
			type: 'number'
		},
		{
			title: 'Size',
			name: 'size',
			type: 'string',
			options: {
				list: [
					'Small',
					'Medium',
					'Large'
				]
			}
		},
		{
			title: 'Date of arrival',
			name: 'date',
			type: 'date'
		},
		{
			title: 'Living with other birds',
			name: 'liveWithBirds',
			type: 'string',
			options: {
				list: [
					"I prefer to live with other birds",
					"I can live with other birds",
					"I may be able to live with other birds",
					"I prefer to live alone"
				]
			}
		},
		{
			title: 'Living with children',
			name: 'liveWithChildren',
			type: 'string',
			options: {
				list: [
					"I can live with teenagers",
					"I can live with older children and teenagers",
					"I prefer to live with adults only",
					"I can live with any aged child"
				]
			}
		},
		{
			title: 'Ideal home location',
			name: 'idealHome',
			type: 'string',
			options: {
				list: [
					"I prefer to live away from the inner city",
					"I can live in just about any location",
					"I prefer to live in the countryside"
				]
			}
		},
		{
			title: 'Hear me chirp',
			name: 'chirp',
			type: 'file',
			description: 'MP3 or MP4'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Portrait',
			name: 'portrait',
			type: 'image',
			fields: [
				{
					title: 'Alternative text',
					name: 'alternative',
					description: 'Important! For accessibility. Keep it short and descriptive. Keep field blank if image is purely decorative',
					type: 'string',
				},
				{
					type: 'string',
					name: 'credits',
					title: 'Credits'
				},
			],
		},
	]
}