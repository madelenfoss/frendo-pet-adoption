import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import content from './structure/content.js';

export default {
	title: 'Frendo Pet Adoption',

	projectId: '83o3bs7v',
	dataset: 'production',

	plugins: 
	[
		deskTool({
			title: 'Content',
			name: 'content',
			structure: content
		}), 

		visionTool()],

	schema: {
		types: schemas,
	},
};
