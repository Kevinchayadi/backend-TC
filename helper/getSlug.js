const { slugify } = require('transliteration');

export default (data)=>{
    return slugify(article.title.toLowerCase().replace(/\s+/g, '-'))
}

