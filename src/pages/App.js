/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Header from "../components/header";
import Main from "./Main";
import "./App.style.css";
//import { bubbleSort, mergesort, merge, insertionSort } from "../helper/sorts";
import { sleep } from "../helper";
import { mergeSort } from "../helper/sorts";
import { getMergeSortAnimations } from "../helper/msHelper";

function App() {
	const [size, setSize] = useState(10);
	const [arr, setArr] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(null);
	const [currentNext, setCurrentNext] = useState(null);
	const [currKey, setKey] = useState(null);
	const [min, setMin] = useState(null);
	const [speed, setSpeed] = useState(10);
	//const { key } = this.props

	useEffect(() => {
		updateList();
	}, [size]);

	useEffect(() => {}, [arr]);
	const updateList = () => {
		const randomArr = Array.from({ length: size }, () =>
			generateRandomInteger(100, 500)
		);
		setArr(randomArr);
	};

	const changeSpeed = () => {
		const speed = prompt("Adjust Speed (in ms)");
		setSpeed(speed);
	};

	const generateRandomInteger = (min, max) => {
		return Math.floor(min + Math.random() * (max + 1 - min));
	};
	const rangeChange = () => {
		const range = prompt("Between 5 until 100");
		if (range < 5 || range > 100) {
			rangeChange();
		} else {
			setSize(range);
		}
	};

	const generateRandomList = () => {
		const sizeOfList = generateRandomInteger(5, 100);
		const randomArr = Array.from({ length: sizeOfList }, () =>
			generateRandomInteger(5, 500)
		);
		setArr(randomArr);
	};

	const bubbleOnClick = async () => {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				setCurrentIndex(j);
				setCurrentNext(j + 1);
				await sleep(speed);
				if (arr[j] > arr[j + 1]) {
					let tmp = arr[j];
					arr[j] = arr[j + 1];
					setCurrentIndex(j + 1);
					setCurrentNext(j);
					await sleep(speed);
					arr[j + 1] = tmp;
				}
				setArr([...arr]);
				await sleep(speed);
			}
		}

		setCurrentIndex(null);
		setCurrentNext(null);
	};

	const selOnClick = async () => {
		let n = arr.length;
		for (let i = 0; i < n; i++) {
			let min = i;
			setCurrentIndex(i);
			await sleep(speed);
			for (let j = i + 1; j < n; j++) {
				setCurrentNext(j);
				await sleep(speed);
				if (arr[j] < arr[min]) {
					min = j;
					setCurrentIndex(j);
					setCurrentNext(null);
					await sleep(speed);
				}
			}
			if (min !== i) {
				let tmp = arr[i];
				arr[i] = arr[min];
				arr[min] = tmp;
			}
			setCurrentNext(null);
		}
		setArr([...arr]);
		setCurrentIndex(null);
	};

	const insertionOnClick = async () => {
		//	const sort_arr = [...arr];
		let length = arr.length;
		for (let i = 1; i < length; i++) {
			setKey(arr[i]);
			await sleep(speed);
			let key = arr[i];
			let j = i - 1;
			while (j >= 0 && arr[j] > key) {
				setCurrentIndex(j);
				setCurrentNext(j + 1);
				await sleep(speed);
				arr[j + 1] = arr[j];
				setCurrentNext(j);
				setCurrentIndex(j + 1);
				j = j - 1;
			}
			setKey(key);
			arr[j + 1] = key;
			setKey(key);
			setArr([...arr]);
			await sleep(speed);

			setCurrentIndex(null);
			setCurrentNext(null);
		}
		setKey(null);
	};

	const mergeSort = () => {
		const animations = getMergeSortAnimations([...arr]);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName("array-bar");
			const isColorChange = i % 3 !== 2;
			const values = document.getElementsByClassName("sc-gsTCUz gtKzTB");
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? "red" : "black";
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * 100);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx];
					barOneStyle.style.height = `${newHeight}px`;
					const val = barOneStyle.querySelector("p");
					if (val !== null) {
						val.textContent = `${newHeight}`;
					}
				}, i * 100);
			}
		}
	};

	return (
		<div className="App">
			<Header
				rangeChange={rangeChange}
				changeSpeed={changeSpeed}
				bubbleOnClick={bubbleOnClick}
				selOnClick={selOnClick}
				insertionOnClick={insertionOnClick}
				mergeOnClick={mergeSort}
				randomList={generateRandomList}
			/>
			<Main
				data={arr}
				currentIndex={currentIndex}
				nextIndex={currentNext}
				currentKey={currKey}
				min={min}
				//				key={key}
			/>
		</div>
	);
}

export default App;
