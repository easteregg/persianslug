var elixir = require('laravel-elixir');

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src';

elixir(function (mix) {
    mix.rollup('persianslug.js')
});
