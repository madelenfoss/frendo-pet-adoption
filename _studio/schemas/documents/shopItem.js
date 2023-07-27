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
		}
	],
}