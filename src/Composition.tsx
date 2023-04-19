import {AbsoluteFill, Img} from 'remotion';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="items-center justify-center bg-gray-300">
			<Img
				className="h-full w-full object-cover"
				src="https://picsum.photos/id/91/3504/2336"
			/>
		</AbsoluteFill>
	);
};
