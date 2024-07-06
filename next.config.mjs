import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: true
	},
	images: {

		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's3.amazonaws.com',
				port: '',
				pathname: "/estelaluz/**",
			},
			{
				protocol: 'https',
				hostname: '**.s3.us-east-2.amazonaws.com',
				port: '',

			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/**',
			},
		],
	},
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/adquira',
				destination: '/adquira/categoria/todos',
				permanent: true,
			},

		]
	},
};

export default withPayload(nextConfig);
