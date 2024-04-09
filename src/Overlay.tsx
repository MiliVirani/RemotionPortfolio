import {
	AbsoluteFill,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
	Img,
	Sequence,
} from 'remotion';
import React, {useMemo} from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import AnimatedTyping from './services/AnimatedTyping';

const MV = staticFile('avatar.jpg');

const {fontFamily} = loadFont();

const title: React.CSSProperties = {
	fontFamily,
	fontSize: 26,
	fontWeight: 'bold',
};

const text: React.CSSProperties = {
	fontWeight: 'bold',
	fontFamily,
	fontSize: 23,
	color: '#4290F5'
};

export const Overlay: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const currentTime = new Date().getHours();
	let greeting = '';
	if (currentTime >= 5 && currentTime < 12) {
		greeting = 'Good Morning';
	} else if (currentTime >= 12 && currentTime < 17) {
		greeting = 'Good Afternoon';
	} else {
		greeting = 'Good Evening';
	}

	const overlayData = [
		{
			message: greeting,
			subMessage: 'Mili this side',
			durationInFrames: 50,
			startFrame: 0,
			endFrame: 50,
		},
		{
			message: 'Lets Have A Glmipse Of',
			subMessage: "Mili's Development Expertise",
			durationInFrames: 60,
			startFrame: 50,
			endFrame: 110,
		},
	];

	const overlays = useMemo(() => {
		return overlayData.map((data, index) => {
			const scale = spring({
				fps,
				frame: frame - data.startFrame,
				config: {
					mass: 0.5,
				},
			});
			const translateY = interpolate(
				frame - data.startFrame,
				[0, 40],
				[0, -300]
			);
			const shouldApplyTransform = frame >= data.startFrame + 35;
			return (
				<Sequence
					key={index}
					durationInFrames={data.durationInFrames}
					from={data.startFrame}
				>
					<div
						style={{
							position: 'absolute',
							backgroundColor: 'white',
							borderRadius: 25,
							left: '50%',
							top: '50%',
							transform: shouldApplyTransform
								? `translate(-50%, -50%) translateY(${translateY}px)`
								: 'translate(-50%, -50%)',
							scale: String(scale),
							padding: 40,
						}}
					>
						<div style={title}>
							{data.message},<div style={text}>{data.subMessage}</div>
						</div>
					</div>
				</Sequence>
			);
		});
	}, [frame, fps]);

	const fadeInImage = interpolate(frame, [30, 80], [0, 1]);

	return (
		<>
			<AbsoluteFill style={{backgroundColor: '#efefef'}}>
				{overlays}
				<Sequence from={30}>
					<div
						style={{
							position: 'absolute',
							top: 20,
							left: 20,
							width: 120,
							height: 120,
							borderRadius: '50%',
							overflow: 'hidden',
							opacity: fadeInImage,
						}}
					>
						<Img
							src={MV}
							style={{width: '100%', height: '100%', objectFit: 'cover'}}
						/>
					</div>
				</Sequence>

				<Sequence from={90}>
					<AnimatedTyping text="This is some text to be typed with animation" />
				</Sequence>
			</AbsoluteFill>
		</>
	);
};
