import {
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Sequence,
	AbsoluteFill,
} from 'remotion';
import React, {useMemo} from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import AnimatedTyping from './services/AnimatedTyping';

const {fontFamily} = loadFont();

const title: React.CSSProperties = {
	fontFamily,
	fontSize: 20,
	fontWeight: 'bold',
	color: 'gray',
	lineHeight: 1.3,
};

const text: React.CSSProperties = {
	fontWeight: 'bold',
	fontFamily,
	fontSize: 18,
	color: '#007e86',
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
			subMessage: 'Meet Mili: MERN Wizard',
			durationInFrames: 60,
			startFrame: 0,
			endFrame: 60,
		},
		{
			message: 'What about',
			subMessage: "Mili's Education?",
			durationInFrames: 60,
			startFrame: 60,
			endFrame: 120,
		},
		{
			message: "Had Bachelor's from",
			subMessage: 'Sutex VNSGU',
			durationInFrames: 60,
			startFrame: 120,
			endFrame: 180,
		},
		{
			message: "Pursuing Master's from",
			subMessage: 'Jain University, Banglore',
			durationInFrames: 60,
			startFrame: 180,
			endFrame: 240,
		},
		{
			message: 'Eager to Know',
			subMessage: "Mili's Work Experience?",
			durationInFrames: 60,
			startFrame: 240,
			endFrame: 300,
		},
		{
			message: 'Currently working',
			subMessage: '@Genxel Technology',
			durationInFrames: 60,
			startFrame: 300,
			endFrame: 360,
		},
		{
			message: 'Lets Have A Glmipse Of',
			subMessage: "Mili's Development Expertise",
			durationInFrames: 60,
			startFrame: 360,
			endFrame: 420,
		},
		{
			message: 'Expertise Level',
			subMessage: 'ReactJS & NodeJS ',
			durationInFrames: 50,
			startFrame: 420,
			endFrame: 470,
		},
		{
			message: 'Moderate Level',
			subMessage: 'Redux & NextJs ',
			durationInFrames: 50,
			startFrame: 470,
			endFrame: 520,
		},
		{
			message: 'Beginner Level',
			subMessage: 'React Native',
			durationInFrames: 50,
			startFrame: 520,
			endFrame: 570,
		},
		{
			message: 'Diving Into My Persona',
			subMessage: 'Languages Known: English, Hindi, Gujarati',
			durationInFrames: 60,
			startFrame: 570,
			endFrame: 630,
		},
		// {
		// 	message: 'Experience',
		// 	subMessage: 'Present',
		// 	durationInFrames: 60,
		// 	startFrame: 540,
		// 	endFrame: 600,
		// },
		// {
		// 	message: 'Working @GenxelTech',
		// 	subMessage: '1/5/2023-Present',
		// 	durationInFrames: 60,
		// 	startFrame: 600,
		// 	endFrame: 660,
		// },
		// {
		// 	message: 'Projects Mili',
		// 	subMessage: 'Worked On?',
		// 	durationInFrames: 60,
		// 	startFrame: 660,
		// 	endFrame: 720,
		// },
		// {
		// 	message: 'Management Systems:',
		// 	subMessage: 'Ledger & Stock Management',
		// 	durationInFrames: 60,
		// 	startFrame: 720,
		// 	endFrame: 780,
		// },
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
			const shouldApplyTransform = frame >= data.startFrame;
			return (
				<Sequence
					key={index}
					durationInFrames={data.durationInFrames}
					from={data.startFrame}
				>
					<div
						style={{
							position: 'absolute',

							borderRadius: 25,
							left: '50%',
							zIndex: 1,
							top: '40%',
							backgroundColor: '#FFFF',
							transform: `translate(-50%, -50%) ${
								shouldApplyTransform ? 'translateY(' + translateY + 'px)' : ''
							}`,

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

	return (
		<AbsoluteFill style={{backgroundColor: '#efefef'}}>
			<AbsoluteFill
				style={{
					backgroundColor: '#00796b',
					width: '100%',
					height: '18%',
				}}
			>
				<Sequence
					from={30}
					style={{
						justifyContent: 'center',
						top: '20%',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#FFF',
							fontSize: '40px',
							letterSpacing: '1px',
						}}
						text="Mili Virani"
					/>
				</Sequence>
				<Sequence
					from={40}
					style={{
						justifyContent: 'center',
						top: '60%',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#FFF',
							fontSize: '25px',
							fontStyle: 'italic',
							letterSpacing: '1px',
						}}
						text="MERN Stack Developer"
					/>
				</Sequence>
			</AbsoluteFill>
			<Sequence from={310}>
				<AnimatedTyping
					style={{
						color: '#000',
						fontSize: '12px',
						letterSpacing: '0.5px',
						textAlign: 'left',
						margin: '0% 4%',
						lineHeight: 1.5,
						paddingTop: '28%',
					}}
					text="Fast-paced, creative web developer with extensive knowledge of React and Nodejs and other web programming languages."
				/>
			</Sequence>
			<Sequence
				from={100}
				style={{
					justifyContent: 'center',
					top: '23.5%',
					display: 'block',
				}}
			>
				<div
					style={{
						backgroundColor: '#ddeaec',
						margin: '15px',
						padding: '5px',
						textAlign: 'center',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '16px',
							fontWeight: 'bold',
							letterSpacing: '0.5px',
							margin: '0% 4%',
							lineHeight: 1.5,
						}}
						text="Education"
					/>
				</div>
			</Sequence>
			<Sequence
				from={135}
				style={{
					justifyContent: 'center',
					top: '30%',
					display: 'block',
				}}
			>
				<div
					style={{
						margin: '0% 4%',
						display: 'flex',
						flexDirection: 'row',
						gap: '6px',
						justifyContent: 'space-between',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="2020-2023"
					/>
				</div>
				<Sequence
					from={10}
					style={{
						justifyContent: 'center',
						left: '21%',
						display: 'block',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							textAlign: 'left',
							lineHeight: 1.5,
							fontWeight: 'bold',
						}}
						text="Sutex Bank College of Computer Applications and Science."
					/>
					<br />
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="Bachelors in Computer Applications(BCA)"
					/>
					<br />
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="9.27/10 SGPA"
					/>
				</Sequence>
				<Sequence
					from={20}
					style={{
						justifyContent: 'center',
						left: '85%',
						display: 'block',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							textAlign: 'right',
							lineHeight: 1.5,
						}}
						text="Surat,India"
					/>
				</Sequence>
			</Sequence>
			<Sequence
				from={190}
				style={{
					justifyContent: 'center',
					top: '39%',
					display: 'block',
				}}
			>
				<div
					style={{
						margin: '0% 4%',
						display: 'flex',
						flexDirection: 'row',
						gap: '6px',
						justifyContent: 'space-between',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="2023-2025"
					/>
				</div>
				<Sequence
					from={10}
					style={{
						justifyContent: 'center',
						left: '21%',
						display: 'block',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							textAlign: 'left',
							lineHeight: 1.5,
							fontWeight: 'bold',
						}}
						text="Jain University"
					/>
					<br />
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="Masters in Computer Applications(MCA)"
					/>
				</Sequence>
				<Sequence
					from={20}
					style={{
						justifyContent: 'center',
						left: '85%',
						display: 'block',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							textAlign: 'right',
							lineHeight: 1.5,
						}}
						text="Surat,India"
					/>
				</Sequence>
			</Sequence>
			<Sequence
				from={280}
				style={{
					justifyContent: 'center',
					top: '44%',
					display: 'block',
				}}
			>
				<div
					style={{
						backgroundColor: '#ddeaec',
						margin: '15px',
						padding: '5px',
						textAlign: 'center',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '16px',
							fontWeight: 'bold',
							letterSpacing: '0.5px',
							margin: '0% 4%',
							lineHeight: 1.5,
						}}
						text="Professional Experience"
					/>
				</div>
			</Sequence>
			<Sequence
				from={290}
				style={{
					justifyContent: 'center',
					top: '51%',
					display: 'block',
				}}
			>
				<div
					style={{
						margin: '0% 4%',
						display: 'flex',
						flexDirection: 'row',
						gap: '6px',
						justifyContent: 'space-between',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="5/2023-present"
					/>
				</div>
				<Sequence
					from={10}
					style={{
						justifyContent: 'center',
						left: '21%',
						display: 'block',
						width: '65%',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							textAlign: 'left',
							lineHeight: 1.5,
							fontWeight: 'bold',
						}}
						text="Genxel Technology PVT. LTD.(Jr. Web Developer)"
					/>
				</Sequence>

				<br />
				<Sequence
					from={20}
					style={{
						justifyContent: 'center',
						left: '21%',
						display: 'block',
						width: '65%',
						top: '2%',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '14px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
							fontWeight: 'bold',
						}}
						text=">"
					/>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="Worked as Full Stack developer and contributed in 5+ projects which included React, React Native ,Node ,Redux and NextJS."
					/>
					<br />
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '14px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
							fontWeight: 'bold',
						}}
						text=">"
					/>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="Created backend and frontend for Saree & Hospital management,drawing kids app,integrated payment gateways like razorpay and stripe."
					/>
					<br />
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '14px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
							fontWeight: 'bold',
						}}
						text=">"
					/>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="Contributed in projects like Dishwa Fashion,Homescore,Stock Admin Panel,etc."
					/>
				</Sequence>
				<Sequence
					from={30}
					style={{
						justifyContent: 'center',
						left: '85%',
						display: 'block',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							textAlign: 'right',
							lineHeight: 1.5,
						}}
						text="Surat,India"
					/>
				</Sequence>
			</Sequence>
			<Sequence
				from={400}
				style={{
					justifyContent: 'center',
					top: '70%',
					display: 'block',
				}}
			>
				<div
					style={{
						backgroundColor: '#ddeaec',
						margin: '15px',
						padding: '5px',
						textAlign: 'center',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '16px',
							fontWeight: 'bold',
							letterSpacing: '0.5px',
							margin: '0% 4%',
							lineHeight: 1.5,
						}}
						text="Skills"
					/>
				</div>
			</Sequence>
			<Sequence
				from={460}
				style={{
					justifyContent: 'center',
					top: '77%',
					display: 'block',
				}}
			>
				<div
					style={{
						margin: '0% 4%',
						display: 'flex',
						flexDirection: 'column',
						gap: '6px',
						justifyContent: 'space-between',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '12px',
							letterSpacing: '0.5px',
							fontWeight: 'bold',
						}}
						text="Expertise Level"
					/>
					{/* <br /> */}
					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
						}}
						text="ReactJS"
					/>

					<AnimatedTyping
						style={{
							color: '#000',
							fontSize: '12px',
							letterSpacing: '0.5px',
							lineHeight: 1.5,
						}}
						text="NodeJS"
					/>
				</div>
				<div
					style={{
						margin: '0% 4%',
						display: 'flex',
						flexDirection: 'column',
						gap: '6px',
						justifyContent: 'space-between',
					}}
				>
					<Sequence
						from={50}
						style={{
							left: '44%',
							justifyContent: 'center',
							display: 'block',
						}}
					>
						<AnimatedTyping
							style={{
								color: '#007e86',
								fontSize: '12px',
								letterSpacing: '0.5px',
								textAlign: 'left',
								lineHeight: 1.5,
								fontWeight: 'bold',
							}}
							text="Intermediate Level"
						/>
						<br />
						<AnimatedTyping
							style={{
								color: '#000',
								fontSize: '12px',
								letterSpacing: '0.5px',
								textAlign: 'left',
								lineHeight: 1.5,
							}}
							text="Redux"
						/>
						<br />
						<AnimatedTyping
							style={{
								color: '#000',
								fontSize: '12px',
								letterSpacing: '0.5px',
								lineHeight: 1.5,
							}}
							text="NextJs"
						/>
					</Sequence>
				</div>

				<div>
					<Sequence
						from={100}
						style={{
							justifyContent: 'center',
							left: '81%',
							display: 'block',
						}}
					>
						<AnimatedTyping
							style={{
								color: '#007e86',
								fontSize: '12px',
								letterSpacing: '0.5px',
								textAlign: 'right',
								lineHeight: 1.5,
								fontWeight: 'bold',
							}}
							text="Beginner Level"
						/>
						<br />
						<AnimatedTyping
							style={{
								color: '#000',
								fontSize: '12px',
								letterSpacing: '0.5px',
								textAlign: 'right',
								lineHeight: 1.5,
							}}
							text="React Native"
						/>
					</Sequence>
				</div>
			</Sequence>
			<Sequence
				from={610}
				style={{
					justifyContent: 'center',
					top: '84%',
					display: 'block',
				}}
			>
				<div
					style={{
						backgroundColor: '#ddeaec',
						margin: '15px',
						padding: '5px',
						textAlign: 'center',
					}}
				>
					<AnimatedTyping
						style={{
							color: '#007e86',
							fontSize: '16px',
							fontWeight: 'bold',
							letterSpacing: '0.5px',
							margin: '0% 4%',
							lineHeight: 1.5,
						}}
						text="Personal Dossier"
					/>
				</div>
			</Sequence>
			<Sequence
				from={620}
				style={{
					justifyContent: 'center',
					top: '91%',
					margin: '0% 4%',
					display: 'block',
				}}
			>
				<AnimatedTyping
					style={{
						color: '#007e86',
						fontSize: '12px',
						letterSpacing: '0.5px',
					}}
					text="Languages Known: "
				/>
				<AnimatedTyping
					style={{
						color: '#000',
						fontSize: '12px',
						letterSpacing: '0.5px',
					}}
					text="English, Hindi, Gujarati"
				/>
				<br />

				<AnimatedTyping
					style={{
						color: '#007e86',
						fontSize: '12px',
						letterSpacing: '0.5px',
					}}
					text="Mail:"
				/>
				<AnimatedTyping
					style={{
						color: '#000',
						fontSize: '12px',
						letterSpacing: '0.5px',
					}}
					text="milivirani.dev@gmail.com"
				/>
			</Sequence>
			{overlays}
		</AbsoluteFill>
	);
};
