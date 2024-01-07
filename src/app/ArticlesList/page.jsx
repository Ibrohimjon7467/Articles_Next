import Link from 'next/link'

function ArticlesList({ articles }) {
    return (
        <div className="prose">
            <ul className='list-none p-0 m-0'>
                {articles.map((article) => {
                    return (
                        <li key={article.id}>
                            <h3>{article.title}</h3>
                            <p>Author: {article.author}</p>
                            <Link href={`/article/${article.id}`}>Read More</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ArticlesList