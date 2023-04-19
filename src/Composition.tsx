import {AbsoluteFill, Img} from 'remotion';

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gray-300 items-center justify-center">
			<Img
				className="object-cover w-full h-full"
				src="https://picsum.photos/id/91/3504/2336"
			/>
		</AbsoluteFill>
	);
};
