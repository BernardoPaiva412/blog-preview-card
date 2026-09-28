import { formatDate } from "../utils/formatDate"
import { post } from "../data/post"

export default function BlogPreviewCard() {
    const { coverImage, categories, publishedAt, title, excerpt, author } = post
    
    return (
        <article className="border-dark-green bg-light-green flex w-full flex-col gap-7 rounded-3xl border p-7 shadow-[8px_8px_0_var(--color-dark-green)] max-w-3xl">
            <img src={coverImage} alt={title} className="w-full rounded-3xl" />

            <div className="flex flex-col items-start gap-7">
                <ul className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <li ky={category} className="bg-brown text-medium-green rounded px-7 py-3 text-sm font-extrabold">
                            {category}
                        </li>
                    ))}
                </ul>

                <p className="text-dark-green text-sem font-medium">
                    Published {formatDate(publishedAt)}
                </p>

                <h1 className="text-dark-green hover:text-brown cursor-pointer text-3xl font-extrabold">
                    {title}
                </h1>

                <p className="text-medium-green font-medium bg-black rounded-2xl p-2">
                    {excerpt}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <img src={author.avatar} alt={author.name} className="size-7 rounded-full" />

                <p className="text-dark-green text-sm font-extrabold">
                    {author.name}
                </p>
            </div>
        </article>
    )
}