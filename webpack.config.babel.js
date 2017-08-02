import path from 'path';

export default {
	entry: {
		app: './src/app.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		noInfo: true
	},
	target: 'web',
	plugins: [],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
			]
			},
				{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "node_modules/@material")
				],
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
				'file-loader'
				]
			}
		]
	},
	resolve: {
				alias: {
						jquery: "jquery/src/jquery"
				}
		}
};

