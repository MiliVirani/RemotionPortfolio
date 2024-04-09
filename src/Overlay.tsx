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
	color: '#4290F5',
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
		{
			message: 'Expertise Level',
			subMessage: 'ReactJS & NodeJS ',
			durationInFrames: 60,
			startFrame: 110,
			endFrame: 170,
		},
		{
			message: 'Moderate Level',
			subMessage: 'Redux & NextJs ',
			durationInFrames: 60,
			startFrame: 170,
			endFrame: 230,
		},
		{
			message: 'Beginner Level',
			subMessage: 'React Native',
			durationInFrames: 60,
			startFrame: 230,
			endFrame: 290,
		},
		{
			message: 'What about',
			subMessage: "Mili's Education?",
			durationInFrames: 60,
			startFrame: 290,
			endFrame: 350,
		},
		{
			message: "Had Bachelor's from",
			subMessage: 'Sutex VNSGU',
			durationInFrames: 70,
			startFrame: 350,
			endFrame: 420,
		},
		{
			message: "Pursuing Master's from",
			subMessage: 'Jain University, Banglore',
			durationInFrames: 60,
			startFrame: 420,
			endFrame: 480,
		},
		{
			message: 'Diving Into My Persona',
			subMessage: 'Languages: English, Hindi, Gujarati | DOB:30/1/1990',
			durationInFrames: 60,
			startFrame: 480,
			endFrame: 540,
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
				[0, 100]
			);
			const shouldApplyTransform = frame >= (data.startFrame+35);
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
							
							top: '40%',
							transform: `translate(-50%, -50%) ${shouldApplyTransform?('translateY('+translateY+'px)'):""}`,
								
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
							left: 25,
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
					<div
						style={{
							position: 'absolute',
							top: 160,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 20,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping style={{color: '#333'}} text="Technical Skills" />
					</div>
				</Sequence>

				<Sequence from={110}>
					<div
						style={{
							position: 'absolute',
							top: 190,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 16,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 10, fontStyle: 'italic'}}
							text="Expertise Level"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="ReactJS"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="NodeJS"
						/>
					</div>
				</Sequence>
				<Sequence from={170}>
					<div
						style={{
							position: 'absolute',
							top: 255,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 16,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 10, fontStyle: 'italic'}}
							text="Moderate Level"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="Redux"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="NextJS"
						/>
					</div>
				</Sequence>
				<Sequence from={230}>
					<div
						style={{
							position: 'absolute',
							top: 320,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 16,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 10, fontStyle: 'italic'}}
							text="Beginner Level"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="React Native"
						/>
					</div>
				</Sequence>
				{/* Education */}
				<Sequence from={310}>
					<div
						style={{
							position: 'absolute',
							top: 380,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 20,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping style={{color: '#333'}} text="Education" />
					</div>
				</Sequence>

				<Sequence from={440}>
					<div
						style={{
							position: 'absolute',
							top: 410,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 16,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 5}}
							text="BCA"
						/>
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="(2020-2023)"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 5}}
							text="MCA"
						/>
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="(2023-2025)"
						/>
					</div>
				</Sequence>
				<Sequence from={500}>
					<div
						style={{
							position: 'absolute',
							top: 480,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 20,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping style={{color: '#333'}} text="Personal Dossier" />
					</div>
				</Sequence>

				<Sequence from={510}>
					<div
						style={{
							position: 'absolute',
							top: 510,
							left: 18,
							fontFamily: 'Arial',
							fontSize: 16,
							fontWeight: 'bold',
							width: '100%',
							opacity: fadeInImage,
						}}
					>
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 5}}
							text="DOB:"
						/>
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="October 1,1990"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#4290F5', marginBottom: 5}}
							text="Languages Known:"
						/>
						<br />
						<AnimatedTyping
							style={{color: '#333', marginBottom: 5}}
							text="English, Hindi, Gujarati"
						/>
					</div>
				</Sequence>
			</AbsoluteFill>
		</>
	);
};
