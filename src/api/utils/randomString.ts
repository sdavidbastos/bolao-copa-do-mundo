export function generateRandomString(length: number): string {
    let randomString = '';
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        randomString += char.charAt(Math.floor(Math.random() * char.length));
    }
    return randomString;
}