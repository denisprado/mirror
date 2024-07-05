
import { getPayloadHMR } from "@payloadcms/next/utilities"
import configPromise from '@payload-config';
import { Profile } from '@/payload-types'
import Image from "next/image";
import imageLoader from "@/helpers/loader";
import { getUrl } from "@/helpers/functions";
import PageContainer from "@/components/PageContainer";
import { PageTitle } from "@/components/PageTitle";

async function getProfile(): Promise<Profile> {
	const payload = await getPayloadHMR({ config: configPromise })
	const courses = await payload.find({
		collection: 'profile',
	})
	return courses.docs[0] as unknown as Profile
}

const SobreHome = async () => {

	const profile = await getProfile()

	const src = getUrl(profile?.image)
	return (
		<PageContainer>
			<PageTitle align="start" caps="">{profile?.name!}</PageTitle>
			<div className="grid grid-cols-12 gap-8">
				<div className="relative col-span-4 rounded-3xl h-5/6">
					<Image priority loader={imageLoader} src={src} alt="Imagem da Estela" fill objectFit="cover" objectPosition="center" className=" rounded-3xl" />
				</div>
				<div className="flex flex-col gap-8 col-span-8">

					<div>{profile?.description}</div>

					<div className="flex flex-col gap-4">
						<p className="font-bold text-2xl">Curriculum Vitae</p>
						{profile?.curriculum?.map(cv => {
							return (
								<div className="flex flex-col" key={cv.id}>
									<p className="font-bold">{cv.title}</p>
									<p>{cv.description}</p>
								</div>
							)
						})}
					</div>

					<div className="flex flex-col gap-4">
						<p className="font-bold text-2xl">Na mídia</p>
						{profile?.press?.map(p => {
							return (
								<div className="flex flex-col" key={p.id}>
									<a className="text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0 md:dark:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 " href={p.link!}>{p.title}</a>

								</div>
							)
						})}
					</div>
				</div>
			</div>
		</PageContainer>
	)
}

export default SobreHome