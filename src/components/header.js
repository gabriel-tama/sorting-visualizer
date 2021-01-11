import React from "react";

import { Button, Wrapper } from "./header.style";

export default function Header({
	randomList,
	rangeChange,
	bubbleOnClick,
	selOnClick,
	insertionOnClick,
	changeSpeed,
	mergeOnClick,
	mergeSort,
}) {
	return (
		<Wrapper>
			<Button disabled>Sorting Visualizer</Button>
			<Button onClick={changeSpeed}>Change Speed</Button>
			<Button onClick={rangeChange}>Change Size</Button>
			<Button onClick={randomList}>Random List</Button>
			<Button onClick={bubbleOnClick}>Bubble Sort</Button>
			<Button onClick={insertionOnClick}>Insertion Sort</Button>
			<Button onClick={selOnClick}>Selection Sort</Button>
			<Button onClick={mergeOnClick}>Merge Sort</Button>
		</Wrapper>
	);
}
