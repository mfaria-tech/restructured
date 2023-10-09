import { Html, Head, Main, NextScript } from "next/document"

/**
 * 
 * @param children: any --> Extend DOM
 * @returns DOM struct
 */
export default function Document({ children }) {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}