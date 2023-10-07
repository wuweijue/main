const fs = require('fs');

try {
    const matches = code.match(/t\((.*)\)/g);
    const enJSON = fs.readFileSync('../../language/en.json', 'utf8');
    const en = JSON.parse(enJSON);
    
    fs.writeFileSync('test.json', JSON.stringify(jsonData, null, 4), 'utf8')
} catch (err) {

} finally {
    return code;
} 