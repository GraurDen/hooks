import { React, useMemo, memo } from "react";


let rerenderCount = 0;

const IsFive = ({ value }) => {
	console.warn('IsFiveRerender: ', ++rerenderCount)

	// Мемоизированная функция (запоминает результат вычисления и возвращает его до тех пор, пока не изменятся зависимости)
	const getResult = useMemo(() => {
		let i = 0;
		while (i < 600000000) i++;
		return value === 5 ? <p>Это пять</p> : <p><b>Это НЕ пять!</b></p>
	}, [value])

	return (
		<div>{getResult}</div>
	)
}

export default memo(IsFive, (prev, next) => {
	if (next.value === 5) {
		return false; //если функция возвращает undefined, то компонента ререндерится
	} else {
		return true;
	}
});