import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-content: left;
	justify-content: space-evenly;
	padding-left: 25px;
	padding-right: 25px;
	height: 50px;
	width: 100%;
	background-color: black;
`;
export const Button = styled.p`
	color: white;
	cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
	font-family: Arial, sans-serif;
	font-size: 15px;
	text-align: left;
	line-height: 20px;

	&:hover {
		color: red;
	}
`;
export const SortWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 200px;
	justify-content: space-evenly;
	align-content: center;
`;
export const RangeWrapper = styled.div`
	width: 200px;
	align-content: center;
	margin-top: 10px;
`;
