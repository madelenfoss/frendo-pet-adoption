export default {
	title: 'Main page slideshow',
	name: 'slideshow',
	type: 'document',
	fields: [
		{
			title: 'Slideshow images',
			name: 'slideshowImages',
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
							type: 'string'
						},
						{
							title: 'Photographer',
							name: 'photographer',
							type: 'string',
						}
					]
				}
			]
		}
	]
}