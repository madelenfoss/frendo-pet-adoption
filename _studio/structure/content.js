export default Structure => {
	const { divider, list, documentTypeListItem } = Structure;

	return list()
		.title('Content')
		.showIcons(false)
		.items([

			documentTypeListItem('dog'),
			documentTypeListItem('cat'),
			documentTypeListItem('bird'),
			documentTypeListItem('bunny'),
			documentTypeListItem('other'),

			divider(),

			documentTypeListItem('slideshow'),

			divider(),

			documentTypeListItem('shopItem'),

		])
}