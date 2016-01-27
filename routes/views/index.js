var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
  // Init locals
	locals.section = 'home';
	locals.filters = {
		category: req.params.category
	};
	locals.data = {
		products: []
	};
	
	// Load the products
	view.on('init', function(next) {
		var q = keystone.list('Product').paginate({
				page: req.query.page || 1,
				perPage: 10,
				maxPages: 10
			})
			.where('state', 'published')
			.sort('-publishedDate');
		
		//if (locals.data.category) {
			//q.where('categories').in([locals.data.category]);
		//}
		q.exec(function(err, results) {
			locals.data.products = results;
			next(err);
		});
	});
	
	// Render the view
	view.render('index');
	
};
