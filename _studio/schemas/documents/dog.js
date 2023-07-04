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
			title: 'Description',
			name: 'description',
			type: 'text'
		}
	]
}