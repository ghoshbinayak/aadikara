var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Product.add({
	name: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
        cover: { type: String, required: true, default: '/keystone/img/cover.jpg' },
	images: { type: Types.TextArray },
	description: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'ProductCategory', many: true }
});

Product.schema.virtual('description.full').get(function() {
	return this.description.extended || this.description.brief;
});

Product.defaultColumns = 'name, state|20%, publishedDate|20%';
Product.register();
