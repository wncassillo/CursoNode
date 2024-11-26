import url from "url"
//modulo q serve para "decompor" uma url

const address = "https://www.site.com.br/catalog?produtos=cadeira"
const parsedUrl = new url.URL(address)
//exemplos de coisas que conseguimos resgatar apartir da URL
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get(`produtos`))