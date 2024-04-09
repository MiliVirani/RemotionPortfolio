import {Composition} from 'remotion';
import {Overlay} from './Overlay';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Overlay"
				component={Overlay}
				durationInFrames={800}
				fps={30}
				width={594}
				height={842}
			/>
		</>
	);
};
