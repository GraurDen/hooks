import { React, memo } from "react";

const render = {
	count1: 0,
	count2: 0
}

const Count = ({ id, value }) => {
	console.warn(`Component Count${id} render: ${++render[`count${id}`]} times`)

	return (
		<h2><b>{value}</b></h2>
	)
}

export default memo(Count);