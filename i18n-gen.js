const fs = require('fs');

let source_dir = './src/i18n/';
let bundle = './i18n.css';
let manifest = './i18n.json';
let available_languages = {};

fs.unlink(bundle, ()=>{});
fs.unlink(manifest, ()=>{});

fs.readdirSync(source_dir).forEach(file => {
    content = JSON.parse(fs.readFileSync(source_dir+file).toString());
    let lang = file.split('.')[0];

    available_languages[lang] = content['_name'];
    delete content['_name'];

    let css = '';
    for (let class_name in content) {
        css += ':lang(' + lang + ').' + class_name + ':before { content: \'' + content[class_name] + '\' }\n';
    }

    fs.writeFileSync(bundle, css, {flag: 'a+'});
});

fs.writeFileSync(manifest, JSON.stringify(available_languages));

console.log(available_languages)