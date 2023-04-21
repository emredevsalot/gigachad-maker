import {useState} from 'react';
import {Img, Sequence, useCurrentFrame} from 'remotion';

const images = [
	'https://picsum.photos/id/91/700/460',
	'https://picsum.photos/id/219/833/555',
	'https://picsum.photos/id/338/666/433',
];

export const GigachadMakerComp = () => {
	const frame = useCurrentFrame();

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const handleImageLoad = (
		e: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		setWidth(e.currentTarget.naturalWidth);
		setHeight(e.currentTarget.naturalHeight);
		console.log(width, height);
	};

	return (
		<>
			{images.map((image, i) => {
				return (
					<Sequence from={i * 60} durationInFrames={60} key={i}>
						<div>
							<h1 className="absolute bg-white p-2 text-2xl font-semibold drop-shadow-md">
								{width + ',' + height}
							</h1>
							<Img
								onLoad={handleImageLoad}
								className="h-[100%] w-[100%] object-cover"
								style={{objectPosition: `-${frame % 60}px center`}}
								src={image}
							/>
						</div>
					</Sequence>
				);
			})}
		</>
	);
};
