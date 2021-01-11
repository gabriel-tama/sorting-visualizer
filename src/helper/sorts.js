import { sleep } from ".";

export const bubbleSort = (inputArr) => {
	let len = inputArr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (inputArr[j] > inputArr[j + 1]) {
				let tmp = inputArr[j];
				inputArr[j] = inputArr[j + 1];
				inputArr[j + 1] = tmp;
			}
		}
	}
	return inputArr;
};

async function merge(arr, lo, m, hi) {
	let tmp = [];
	let len = m - lo;
	let i, j, k;
	// save left subarray
	for (i = 0; i < len; i++) {
		// animate this move
		tmp[i] = arr[lo + i];

		await sleep(100);
	}
	// merge subarrays
	i = 0;
	j = m;
	k = lo;
	while (i < len && j < hi) {
		if (tmp[i] <= arr[j]) {
			// animate this move
			arr[k++] = tmp[i++];
		} else {
			// animate this move
			arr[k++] = arr[j++];
		}
	}
	// copy the remaining elements
	while (i < len) {
		// animate this move
		arr[k++] = tmp[i++];
	}
}

function mergesort(arr, lo, hi) {
	if (hi - lo > 1) {
		let m = lo + ((hi - lo) >> 1);
		mergesort(arr, lo, m);
		mergesort(arr, m, hi);
		merge(arr, lo, m, hi);
	}
	return [...arr];
}

export function mergeSort(arr) {
	mergesort(arr, 0, arr.length);
	return [...arr];
}

export const insertionSort = (inputArr) => {
	let length = inputArr.length;
	for (let i = 1; i < length; i++) {
		let key = inputArr[i];
		let j = i - 1;
		while (j >= 0 && inputArr[j] > key) {
			inputArr[j + 1] = inputArr[j];
			j = j - 1;
		}
		inputArr[j + 1] = key;
	}
	return inputArr;
};

function selectionSort(inputArr) {
	let n = inputArr.length;

	for (let i = 0; i < n; i++) {
		// Finding the smallest number in the subarray
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (inputArr[j] < inputArr[min]) {
				min = j;
			}
		}
		if (min !== i) {
			// Swapping the elements
			let tmp = inputArr[i];
			inputArr[i] = inputArr[min];
			inputArr[min] = tmp;
		}
	}
	return inputArr;
}
