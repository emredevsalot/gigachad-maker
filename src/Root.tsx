import {Composition} from 'remotion';
import {GigachadMakerComp} from './GigachadMakerComp';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="GigachadMakerComp"
				component={GigachadMakerComp}
				durationInFrames={180}
				fps={30}
				width={480}
				height={640}
			/>
		</>
	);
};
