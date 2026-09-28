import BlogPreviewCard from "../components/BlogPreviewCard";

import useFetch from "../hooks/useFetch";

export default function HomePage() {
    const { data: post, loading, error } = useFetch("/post")

    if (loading) {
        return <p className="text-dark-green">Loading...</p>
    }
    
    if (error) {
        return (
            <p>Wasn't possibel loading the post. Try again.</p>
        )
    }

    return <BlogPreviewCard post={post} />
}