import {useState} from 'react';
import {Img, Sequence, staticFile, useCurrentFrame} from 'remotion';

// Get 4 images from public file (public is ignored in .gitignore)
const images = [
	staticFile('/image1.jpg'),
	staticFile('/image2.jpeg'),
	staticFile('/image3.jpeg'),
	staticFile('/image4.jpeg'),
];

const MOVING_SPEED = 1;
const DURATION = 90;

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

	const handleImageMovement = (imageNumber: number) => {
		let directions = ['', ''];
		let movements = [0, 0];
		switch (imageNumber) {
			//To Right
			case 0:
				directions = ['+', '+'];
				movements = [MOVING_SPEED, 0];
				break;
			//To Up
			case 1:
				directions = ['-', '-'];
				movements = [0, MOVING_SPEED];
				break;
			//To Left
			case 2:
				directions = ['-', '-'];
				movements = [MOVING_SPEED, 0];
				break;
			//To Down
			case 3:
				directions = ['+', '+'];
				movements = [0, MOVING_SPEED];
				break;
			default:
				break;
		}

		let horizontalMovement = `${directions[0]}${
			(DURATION - (frame % DURATION)) * movements[0]
		}px`;
		let verticalMovement = `${directions[1]}${
			(DURATION - (frame % DURATION)) * movements[1]
		}px`;

		return `${horizontalMovement}, ${verticalMovement}`;
	};

	return (
		<>
			{images.map((image, i) => {
				return (
					<Sequence
						from={i * DURATION}
						durationInFrames={DURATION}
						key={i}
						name={'Image ' + (i + 1)}
					>
						<div>
							{/* <h1 className="absolute z-10 bg-white p-2 text-2xl font-semibold drop-shadow-md">
								{width + ',' + height}
							</h1> */}
							<div className="z-20 flex h-[640px] w-[480px] items-center justify-center outline outline-8 outline-red-500">
								{/* <div className="z-20 ml-16 mt-16 flex h-[480px] w-[360px] items-center justify-center outline outline-8 outline-red-500"> */}
								<Img
									onLoad={handleImageLoad}
									className="h-[150%] w-[150%] overflow-visible object-cover grayscale"
									style={{
										transform: `translate(${handleImageMovement(i)})`,
										// transform: 'translate(90px,0px)',
									}}
									src={image}
								/>
							</div>
						</div>
					</Sequence>
				);
			})}
		</>
	);
};
