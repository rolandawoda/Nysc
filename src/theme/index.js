
import colors from './colors';

export const getTheme = (mode) => {
    let Theme = {};
    for (let key in colors) {
       Theme[key] = colors[key][mode];
    }
    return Theme;
 };