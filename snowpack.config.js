module.exports = {
    mount: {
        'public': '/',
        'src': '/_dist_',
    },

    extends: '@snowpack/app-scripts-svelte',

    plugins: [
        '@snowpack/plugin-svelte',
        ['./snowpack-closure-compiler.js', { 'output': 'html/dist/index.js' }],
    ],

    buildOptions: {
        sourcemap: true,
    },

};
