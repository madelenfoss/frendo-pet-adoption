export default {
	title: 'Bunny',
	name: 'bunny',
	type: 'document',
	fields: [
		{
			title: 'Bunny name',
			name:	'bunnyName',
			type: 'string'
		},
		{
			title: 'slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'bunnyName'
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
			title: 'Living with other bunnies',
			name: 'liveWithBunnies',
			type: 'string',
			options: {
				list: [
					"I prefer to live with other bunnies",
					"I can live with other bunnies",
					"I may be able to live with other bunnies",
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
			title: 'Description',
			name: 'description',
			type: 'text'
		}
	]
}