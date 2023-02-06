/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [
            {
                key: 'http-authorization',
                value: localStorage.getItem('ACCESS_TOKEN'),
            },
            {key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_API_URL},

        ]
    },
    reactStrictMode: true,
}