export default {
	title: 'Bird',
	name: 'bird',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name:	'name',
			type: 'string',
			validation: rule => rule.required()
		},
		{
			title: 'slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			},
			validation: rule => rule.required()
		},
		{
			title: 'Breed',
			name: 'breed',
			type: 'string',
			validation: rule => rule.required()
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
			},
			validation: rule => rule.required()
		},
		{
			title: 'Age',
			name: 'age',
			type: 'number',
			validation: rule => rule.required()
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
			},
			validation: rule => rule.required()
		},
		{
			title: 'Date of arrival',
			name: 'date',
			type: 'date',
			validation: rule => rule.required()
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
			},
			validation: rule => rule.required()
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
			},
			validation: rule => rule.required()
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
			},
			validation: rule => rule.required()
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
			type: 'text',
			validation: rule => rule.required()
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
			validation: rule => rule.required()
		}
	]
}