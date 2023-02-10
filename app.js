var button_encriptar = document.getElementById("button-encriptar");
var button_desencriptar = document.getElementById("button-desencriptar");
var button_copiar = document.getElementById("button-copiar");

function isVowel(letter) {
    return (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") ? true : false;
}

function encryptionKey(letter) {
    let expression = "";

    switch(letter) {
        case "a":
            expression = "ai";
            break;
        case "e":
            expression = "enter";
            break;
        case "i":
            expression = "imes";
            break;
        case "o":
            expression = "ober";
            break;
        default:
            expression = "ufat";
            break;
      }

    return expression;
}

function displayText(text) {
    let paragraph = document.getElementById("inserted-text");

    paragraph.textContent = text;
    paragraph.style.display = "block";
    paragraph.disabled = true;

    document.getElementById("input-texto").value = "";    
    document.getElementById("div-textoDesencriptadoVacio").style.display = "none";
    document.getElementById("button-copiar").style.display = "block";
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

function encrypt() {
    let text_area = document.getElementById("input-texto").value.toLowerCase();
    let encrypted_text = "";
    let letter = "";

    if (text_area.length > 0) {
        for (let i = 0; i < text_area.length; i++) {
            letter = text_area.charAt(i);
            
            if (isVowel(letter)) {
                encrypted_text += encryptionKey(letter);
            } else {
                encrypted_text += letter;
            }
            
        }

        displayText(encrypted_text);
        button_copiar.onclick = copyText(encrypted_text);
    }
} 

function decrypt() {
    let text_area = document.getElementById("input-texto").value.toLowerCase();
    let decrypted_text = "";
    let letter = "";
    let encrypted_text = "";

    if (text_area.length > 0) {
        for (let i = 0; i < text_area.length; i++) {
            letter = text_area.charAt(i);
            
            if (isVowel(letter)) {
                if (letter === "a") {
                    encrypted_text = text_area.substring(i, i+2);
                    if(encrypted_text === "ai") {
                        decrypted_text += "a";
                        i += 1;
                    } else {                
                        decrypted_text += letter;
                    }
                }

                if (letter === "e") {
                    encrypted_text = text_area.substring(i, i+5);
                    if(encrypted_text === "enter") {
                        decrypted_text += "e";
                        i += 4;
                    } else {                
                        decrypted_text += letter;
                    }
                }

                if (letter === "i") {
                    encrypted_text = text_area.substring(i, i+4);
                    if(encrypted_text === "imes") {
                        decrypted_text += "i";
                        i += 3;
                    } else {                
                        decrypted_text += letter;
                    }
                }
                
                if (letter === "o") {
                    encrypted_text = text_area.substring(i, i+4);
                    if(encrypted_text === "ober") {
                        decrypted_text += "o";
                        i += 3;
                    } else {                
                        decrypted_text += letter;
                    }
                }

                if (letter === "u") {
                    encrypted_text = text_area.substring(i, i+4);
                    if(encrypted_text === "ufat") {
                        decrypted_text += "u";
                        i += 3;
                    } else {                
                        decrypted_text += letter;
                    }
                }
            } else {
                decrypted_text += letter;
            }

        }

        displayText(decrypted_text);
        button_copiar.onclick = copyText(decrypted_text);
    }
}

button_encriptar.onclick = encrypt;
button_desencriptar.onclick = decrypt;