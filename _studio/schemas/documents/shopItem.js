export default {
	title: 'Shop item',
	name: 'shopItem',
	type: 'document',
	fields: [
		{
			title: 'Item name',
			name: 'itemName',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'itemName'
			}
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Stock',
			name: 'stock',
			type: 'number'
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number'
		},
		{
			title: 'Shop images',
			name: 'shopImages',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							title: 'Image',
							name: 'image',
							type: 'image'
						},
						{
							title: 'Description',
							name: 'description',
							type: 'text'
						},
						{
							title: 'Alternative image description',
							name: 'altText',
							description: 'For accessibility. Keep it short and descriptive. Keep field blank if image is purely decorative',
							type: 'text'
						},
						{
							title: 'Photographer',
							name: 'photographer',
							type: 'string',
						}
					]
				}
			]

		},
	],
}