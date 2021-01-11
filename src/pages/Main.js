/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";
import { Button } from "../components/header.style";

export default function Main({ currentIndex, data, nextIndex, currentKey }) {
	const width = screen.width / data.length;
	return (
		<Container>
			<BlocksContainer>
				{data.map((size, j, arr) => (
					<>
						<Bar
							className="array-bar"
							height={`${size}px`}
							width={`${width}px`}
							key={j}
							active={currentIndex === j}
							style={nextIndex === j ? { backgroundColor: "red" } : null}
							currkey={
								currentKey === arr[j + 1] ? { backgroundColor: "green" } : null
							}
						>
							{data.length < 20 && <Button disabled>{size}</Button>}
						</Bar>
					</>
				))}
			</BlocksContainer>
		</Container>
	);
}

const Container = styled.div`
	position: absolute;
	bottom: 0px;
	width: 100%;
`;

const BlocksContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
`;

const Bar = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => (props.active ? "red" : "black")};
	margin-right: 1px;
	${(props) => props.style}
	${(props) => props.currkey}
	${(props) => props.minkey}
`;

// const NumText = styled.p`
// 	font: Arial;
// 	color: white;
// 	font-size: 15px;
// `;
