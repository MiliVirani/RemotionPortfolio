import React, {useState, useEffect} from 'react';

interface AnimatedTypingProps {
	text: string;
	typingSpeed?: number;
	onFinish?: () => void;
}

const AnimatedTyping: React.FC<AnimatedTypingProps> = ({
	text,
	typingSpeed = 50,
	onFinish,
}) => {
	const [typedText, setTypedText] = useState<string>('');

	useEffect(() => {
		const typeWriter = (index: number) => {
			if (index < text.length) {
				setTimeout(() => {
					setTypedText((prevTypedText) => prevTypedText + text[index]);
					typeWriter(index + 1);
				}, typingSpeed);
			} else {
				onFinish && onFinish();
			}
		};

		typeWriter(0);
	}, [text, typingSpeed, onFinish]);

	return <span>{typedText}</span>;
};

export default AnimatedTyping;
