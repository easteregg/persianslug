/*
 * This is practically taken from this package, but it was outdated and code needed a bit cleanup.
 * @see https://www.npmjs.com/package/arslugify
 *
 */
import XRegExp from "xregexp";

function dasherize(value) {
    return value.replace(/\s/g, '-');
}

export function slugify(value) {
    let cleanReg = XRegExp('\\p{S}|\\p{P}', 'g');
    return dasherize(
        XRegExp.replace(value, cleanReg, '')
            .trim()
            .toLowerCase()
            .replace(/\s{2,}/g, ' ')
    );
}

window.slugify = slugify;
