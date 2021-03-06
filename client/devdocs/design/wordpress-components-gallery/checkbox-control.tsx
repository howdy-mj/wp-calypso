/**
 * External dependencies
 */
import React, { useState } from 'react';

/**
 * WordPress dependencies
 */
import { CheckboxControl } from '@wordpress/components';

const CheckboxControlExample = () => {
	const [ isChecked, setChecked ] = useState( false );

	return (
		<CheckboxControl
			label="Example Checkbox Control"
			checked={ isChecked }
			onChange={ setChecked }
		/>
	);
};

export default CheckboxControlExample;
