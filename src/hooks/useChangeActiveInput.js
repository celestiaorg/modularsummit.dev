import { useState, useRef } from "react";

export function useChangeActiveInput(initialState) {
	const [isActive, setIsActive] = useState(initialState);
	const inputRef = useRef();

	function handleFocus() {
		setIsActive("isActive");
	}

	function handleBlur() {
		if (!inputRef.current.value) {
			setIsActive(initialState);
		}
	}

	return {
		isActive,
		handleFocus,
		handleBlur,
		inputRef,
	};
}

export default useChangeActiveInput;