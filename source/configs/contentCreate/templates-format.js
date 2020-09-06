function temlateeFormat(style, format) {
    if (style === 'css') {
        return 'css';
    } else if (style === 'scss') {
        return 'scss';
    } else {
        return format;
    }
}

module.exports = temlateeFormat;
