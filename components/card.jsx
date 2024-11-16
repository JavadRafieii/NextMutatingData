import { toggleLike } from "@/utils/api";

export default function Card({ post, addOptimistic }) {
    const { id, title, content, image, liked } = post;

    function handleToggleLike(id) {
        addOptimistic(id);
        toggleLike(id);
    }

    return (
        <div className="w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt={title} />
            <div className="w-full flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-700">{content}</p>
                <form action={handleToggleLike.bind(null, id)}>
                    <button className="float-right">
                        <img src={liked ? "like.svg" : "unlike.svg"} alt="Like Icon" className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}