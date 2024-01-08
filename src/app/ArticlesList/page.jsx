// import Image from 'next/image'
import Link from 'next/link'

function ArticlesList({ articles }) {

    return (
        <div className="prose">
            <ul className='list-none p-0 m-0'>
                {articles.map((article) => {
                    return (
                        <li className='pb-10' key={article.id}>
                            {/* <Image src={article.image} width={500} height={500} /> */}
                            <h2>{article.title}</h2>
                            <h4>Author: {article.author}</h4>
                            <p>{article.body}</p>
                            <Link href={`/article/${article.id}`}>Read More</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ArticlesList