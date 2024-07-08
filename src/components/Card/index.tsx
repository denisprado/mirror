import { getUrl } from "@/helpers/functions";
import imageLoader from "@/helpers/loader";
import { Product, Work } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import TextLink from "../TextLink";

const Card = ({ category, post }: { category?: string, post: Work | Product }) => {


	const src = getThumbSrc(post);

	const url = category ? category + '/' + post.slug! : isProduct(post) ? '/adquira/' + post.slug! : post.slug!

	console.log("image", post)

	return (
		src! && <div className="flex flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 w-full">
			<Link href={url} className=" flex flex-col gap-2">
				<div className="w-full h-[300px] relative overflow-hidden rounded-3xl" key={post.id!}>
					<Image priority src={src!} alt={post.title!} className="rounded-3xl w-full h-full transform transition duration-500 hover:scale-105 opacity-95 hover:opacity-100" fill style={{ objectFit: 'cover' }}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw">
					</Image>
				</div>
			</Link>
			<div className="flex flex-row justify-between gap-4 py-2 px-1">
				<TextLink text={post.title!} url={url} />
				<div className="flex flex-col text-right">
					<div>
						{isProduct(post) && "R$ " + post.price!}
					</div>
					{isProduct(post) && <div >
						{/* <form action={handleSubmitWithTitle}>
							<button className="uppercase font-bold text-sm" type="submit">Adquira</button>
							</form> */}
						<TextLink className="uppercase font-bold text-sm" text="Adquira" url={'/contato/Tenho interesse na obra ' + post.title}></TextLink>

					</div>}
				</div>
			</div>
		</div>
	)
}

export function getThumbSrc(post: Work | Product) {
	const gallery = post.gallery!
	const image = gallery[0]?.image!
	const src = getUrl(image)
	return src;
}

function isProduct(post: Work | Product): post is Product {
	return 'price' in post;
}

export default Card