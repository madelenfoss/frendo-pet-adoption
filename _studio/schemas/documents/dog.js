export default {
	title: 'Dog',
	name: 'dog',
	type: 'document',
	fields: [
		{
			title: 'Dog name',
			name:	'dogName',
			type: 'string'
		},
		{
			title: 'slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'dogName'
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
					'male',
					'female'
				]
			}
		},
		{
			title: 'Age',
			name: 'age',
			type: 'number'
		},
		{
			title: 'Date of arrival',
			name: 'date',
			type: 'date'
		},
		{
			title: 'Living with dogs',
			name: 'liveWithDogs',
			type: 'string',
			options: {
				list: [
					"I prefer to live with other dogs",
					"I can live with other dogs",
					"I prefer to live alone"
				]
			}
		},
		{
			title: 'Living with cats',
			name: 'liveWithCats',
			type: 'string',
			options: {
				list: [
					"I may be able to live with cats",
					"I can't live with cats"
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
					"I prefer to live with adults only"
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
			title: 'Hear me woof',
			name: 'woof',
			type: 'file',
			description: 'MP3 or MP4'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		}
	]
}