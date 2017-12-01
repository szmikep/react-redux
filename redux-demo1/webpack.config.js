var path = require("path");

module.exports = {
	entry:{
		app:path.join(__dirname,"./app/app.js")
	},
	output:{
		path:path.join(__dirname,"./brie/"),
		filename:"[name].js"
	},
	module:{
		rules:[
			{
				test:/\.(jsx|js)/,
				exclude:/node_modules/,
				use:[
					{
						loader:"babel-loader",
						options:{
							presets:["es2015","react"]
						}
					}
				]
			}
		]
	}
}