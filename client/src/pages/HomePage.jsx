import BlogPreviewCard from "../components/BlogPreviewCard";
import { post } from "../data/post";

export default function HomePage() {
    return <BlogPreviewCard post={post} />
}