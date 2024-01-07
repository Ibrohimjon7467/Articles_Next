import ArticlesList from './../ArticlesList/page'

async function getData() {
  const req = await fetch("http://localhost:2023/articles")
  const data = await req.json()

  return data
}

async function Articles() {

  const articles = await getData()

  return (
    <div>
      <ArticlesList articles={articles} />
    </div>
  )
}

export default Articles