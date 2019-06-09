(function () {
    'use strict';

    window.onload = function() {
        let xhr = new XMLHttpRequest();
        let languages = {};
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                languages = JSON.parse(xhr.responseText);
                
                let select = document.getElementById("language-select");
                for (let lang in languages) {
                    let option = document.createElement('option');
                    option.value = lang;
                    option.text = languages[lang];
                    select.appendChild(option);
                }
                select.onchange = () => document.body.setAttribute('lang', select.options[select.selectedIndex].value);
            }
        };
        xhr.open("GET", "i18n.json", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
    };

}());
