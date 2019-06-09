import copy from 'rollup-plugin-copy'

export default {
    input: 'src/main.js',
    output: {
        file: './bundle.js',
        format: 'iife'
    },
    plugins: [
        copy({
            targets: ['src/index.html'],
            outputFolder: './'
        })
    ]
}