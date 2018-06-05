const axios = require('axios')
const cheerio = require('cheerio')

const spider = async () => {
  const res = await axios.get('http://www.acfun.cn/a/ac4388459')
  const html = res.data

  const $ = cheerio.load(html)

  const articleContent = $('.article-content')

  const doms = $(articleContent).find('p > img, p, div, div > img')
  // const doms = $(articleContent).find('li')
  console.log(doms)
  const content = []
  doms.map((i, d) => {
    const text = $(d).text()
    if (text) {
      content.push(text)
    } else if (d.name === 'img') {
      const src = $(d).attr('src')
      content.push(src)
    }
  })

  console.log(content)
}

spider()