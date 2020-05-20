function copy(text){
    var copytext = document.createElement("textarea");
    copytext.value = text;
    document.body.appendChild(copytext);
    copytext.select();
    document.execCommand("copy");
    copytext.parentElement.removeChild(copytext);

}