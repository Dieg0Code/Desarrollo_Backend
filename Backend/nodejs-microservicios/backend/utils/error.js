function err(msg, code) {
    let e = new Error(msg);

    if (code) {
        e.statusCode = code;
    }

    return e;
}

module.exports = err;