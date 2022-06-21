const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// Hash a password
async function PwHash(password) {
    try {
        const hash = await argon2.hash(password);
        return hash;
    } catch (err) {
        console.log(`Failed to hash password\nERR: ${String(err)}`);
    }
}

// Verify a password
async function PwVerify(hash, password) {
    try {
        // password match
        if (await argon2.verify(hash, password)) return true;
        // password did not match
        return false;
    } catch (err) {
        // internal failure or any other error
        console.log(`Failed to verify password with hash\nERR: ${String(err)}`);
    }
}

// Generate JWT
function genJWT(payload, expiresIn) {
    // payload = JSON.parse(payload)
    return jwt.sign(payload, process.env.JWT, { expiresIn: expiresIn || '7d' })
}

// Verify JWT and return
function chkJWT(token) {
    try {
        return jwt.verify(token, process.env.JWT)
    }
    catch (err) {
        console.log(`Failed to verify JWT\nERR: ${String(err)}`)
    }
}


export { PwHash, PwVerify, genJWT, chkJWT }