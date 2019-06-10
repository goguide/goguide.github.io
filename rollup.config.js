import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

const production = !process.env.WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: './dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
		commonjs(),
        production && uglify(),
		babel({
			exclude: 'node_modules/**',
		}),
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