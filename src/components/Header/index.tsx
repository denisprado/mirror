import Logo from "@/components/Logo";
import { getCategories } from "@/helpers/functions";
import Link from "next/link";
import TextLink from "../TextLink";
import ButtonLink from "../ButtonLink";

export default async function Header() {

	const data = await getCategories('categoryWork')
	return (
		<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-2">
				<Link href="/" className="flex items-center rtl:space-x-reverse">
					<Logo></Logo>
				</Link>

				<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-4">
						{data.map(cat => {
							const title: string = cat.title as string
							return (
								<li key={cat.id}>
									<TextLink url={`/${cat.slug}`} text={title.toLowerCase() as string}></TextLink>
								</li>
							)
						})}
						<li>
							<TextLink url={"/cursos"} text={"cursos"} />
						</li>
						<li>
							<TextLink url={"/sobre"} text={"sobre"} />

						</li>
						<li>
							<TextLink url={"/contato"} text={"contato"} />
						</li>
					</ul>
					<ButtonLink text="Adquira" url="/adquira" />
					<button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				</div>

			</div>

		</nav>
	)
}