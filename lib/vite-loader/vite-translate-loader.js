const fs = require('fs');
const path = require('path');
const cache = require('../../cache/translationCache');

module.exports = function translate() {
    return {
        name: 'vite:collectTranslationContent',
        enforce: 'pre', // 将执行顺序调整至最前
        transform(code, id, opt) {
            const isTsx = /\.tsx$/.test(id);
            const matches = code.match(/useTranslate\((.*?)\)/g)

            if(!isTsx || !matches) return code
            try {

                const matchesList = matches.map(item=>{
                    return item.slice(14, -2)
                });
                console.log(matchesList, matches)
                // const Jsonpath = path.resolve(__dirname, '../../language/en.json');
                // const enJSON = fs.readFileSync(Jsonpath, 'utf8');
                // const en = JSON.parse(enJSON);
                // cache.content = matches.filter(item => {
                //     return en[item]
                // })
            } catch (err) {
                console.error(err)
            } finally {
                return code;
            }
        }
    }
}