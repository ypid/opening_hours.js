import {readFileSync} from 'fs';
import common from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import yaml from 'rollup-plugin-yaml';

var banner = readFileSync('./banner.js', 'utf-8');
var dependencies = process.env.DEPS === 'YES';

export default {
    input: './index',
    plugins: dependencies ? [
        nodeResolve(),
        common(),
        yaml(),
    ] : [
        yaml(),
    ],
    external: dependencies ? [] : [
        'i18next-client',
        'suncalc'
    ],
    output: {
        name: 'opening_hours',
        banner: banner,
        globals: dependencies ? {} : {
            'i18next-client': 'i18n',
            'suncalc': 'SunCalc'
        },
        format: 'umd',
        file: dependencies ? 'opening_hours+deps.js' : 'opening_hours.js'
    }
};
