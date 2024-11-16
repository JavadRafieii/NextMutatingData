import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
    return (
        <header className="my-5 flex items-center justify-between">
            <Link href="/">
                <Image
                    src="next.svg"
                    width={120}
                    height={100}
                    alt="Next Logo"
                    priority
                />
            </Link>
            <nav>
                <ul className="flex items-center space-x-5">
                    <li>
                        <Link href="/posts" className="text-sm underline text-slate-800">Posts</Link>
                    </li>
                    <li>
                        <Link href="/new-post" className="cursor-pointer rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700">Create New Post</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}