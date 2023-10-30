'use client'
import getYouTubeID from 'get-youtube-id'
import ReactPlayer from 'react-player'

export default function YoutubeVideo({ video }) {
	const id = getYouTubeID(video)
	const url = `https://www.youtube.com/embed/${id}`
	return (
		<section className='w-full aspect-video lg:max-w-md'>
			<ReactPlayer
				width={'100%'}
				height={'100%'}
				url={url}
			/>
		</section>
	)
}
