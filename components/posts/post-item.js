import Link from "next/link";
import Image from "next/image";

export default function PostItem() {


    return(
        <li>
            <Link>
                <div>
                    <Image src={"./images/titan.png"} alt={'alternate'} height={300} width={300} />
                </div>
                <h3>title</h3>
                <time>December 8th 2022</time>
                <p>this is an excerpt from a very exciting blog post</p>
            </Link>
        </li>
    )
}