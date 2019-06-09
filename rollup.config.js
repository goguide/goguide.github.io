import copy from 'rollup-plugin-copy'

export default {
    input: 'src/main.js',
    output: {
        file: '_site/bundle.js',
        format: 'iife'
    },
    plugins: [
        copy({
            targets: ['src/index.html'],
            outputFolder: '_site'
        })
    ]
}