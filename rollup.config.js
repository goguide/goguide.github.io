import copy from 'rollup-plugin-copy'

export default {
    input: 'src/main.js',
    output: {
        file: './dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        copy({
            targets: [
                'src/index.html',
                'src/style.css',
                'src/res/milligram.min.css',
                'src/res/milligram.min.css.map',
                'src/res/sun.svg',
                'src/res/moon.svg',
            ],
            outputFolder: './dist/'
        })
    ]
}