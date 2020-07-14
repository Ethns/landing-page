const usernamepassword = "testuser:pwd123"
console.log(usernamepassword)
const encodedWithBase64 = btoa(usernamepassword);
console.log("encoded with base64: " + encodedWithBase64);
const decodedfromBase64 = atob(encodedWithBase64);
console.log("decoded from base64: " + decodedfromBase64);