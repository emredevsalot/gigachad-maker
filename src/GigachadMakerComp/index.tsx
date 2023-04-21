import {useState} from 'react';
import {Img, Sequence, useCurrentFrame} from 'remotion';

const images = [
	'https://picsum.photos/id/91/700/460',
	'https://picsum.photos/id/219/833/555',
	'https://picsum.photos/id/338/666/433',
	'https://images.unsplash.com/photo-1682027888746-25b1af7bd47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
];

const MOVING_SPEED = 2;
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
			(frame % DURATION) * movements[0]
		}px`;
		let verticalMovement = `${directions[1]}${
			(frame % DURATION) * movements[1]
		}px`;

		return `${horizontalMovement} ${verticalMovement}`;
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
							<h1 className="absolute z-10 bg-white p-2 text-2xl font-semibold drop-shadow-md">
								{width + ',' + height}
							</h1>
							<div className="z-20 ml-16 mt-16 h-[480px] w-[360px] outline outline-8 outline-red-500">
								<Img
									onLoad={handleImageLoad}
									className="h-[100%] w-[100%] overflow-visible object-cover grayscale"
									style={{
										objectPosition: handleImageMovement(i),
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
