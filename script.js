function updateLength() {
    document.getElementById("lengthValue").innerText = document.getElementById("length").value;
}

function generatePassword() {
    let length = document.getElementById("length").value;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeChars = document.getElementById("includeChars").checked;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (includeNumbers) chars += "0123456789";
    if (includeChars) chars += "!@#$%^&*-_+=[]{}~`";
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById("password").value = password;
}

function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
}
