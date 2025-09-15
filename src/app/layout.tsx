import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Blog",
	description: "Made with <3 by rapon1kt",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
