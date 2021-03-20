import sjcl from "sjcl";


/**
 * Хеширует пароль с pbkdf2
 * @param {string} password 
 * @returns {string}
 */
export function encryptPassword(password: string) {
    const saltBits = sjcl.random.randomWords(2, 0);
    const salt = sjcl.codec.base64.fromBits(saltBits);
    const key = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(password, saltBits, 2000, 256));
    return `${key}$${salt}`;
};

/**
 * Сверяет текстовый пароль с его хешем
 * @param {string} password 
 * @param {string} storedPasswordHash 
 * @returns {boolean}
 */
export function verifyPassword(password: string, storedPasswordHash: string) {
    const [_key, _salt] = storedPasswordHash.split('$');
    const saltBits = sjcl.codec.base64.toBits(_salt);
    const derivedKey = sjcl.misc.pbkdf2(password, saltBits, 2000, 256);
    const derivedBaseKey = sjcl.codec.base64.fromBits(derivedKey);

    if (_key != derivedBaseKey) {
        return false;
    }

    return true;
}

/**
 * Хеширует данные в sha256 хеш
 * @param {any} data 
 */
export function sha256(data: any) {
    const hashBytes = sjcl.hash.sha256.hash(data);
    return sjcl.codec.hex.fromBits(hashBytes);
}