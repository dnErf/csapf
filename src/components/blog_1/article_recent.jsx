import { formatDate } from "@/lib/utils"

let directusUrl = import.meta.env.PUBLIC_DIRECTUS

export default ({ article }) => {

    return (
        <div>
            <a href={`/articles/${article.slug}`}>
                <img src={`${directusUrl}/assets/${article.data.image}?width=300`} alt="recent article image" class="w-full h-auto rounded-2xl" />
                <div>
                    <h2>
                        {article.data.title}
                    </h2>
                    <p>
                        {formatDate(article.data.published)}
                    </p>
                    <div>
                    {
                        article.data.tags.map((tag) => (
                            <span>{tag}</span>
                        ))
                    }
                    </div>
                </div>
            </a>
        </div>
    )
}
