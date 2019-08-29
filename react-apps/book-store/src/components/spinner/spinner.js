import React from 'react';
import './spinner.css'

const Spinner = () =>  {
	return (
<div class="lds-css ng-scope">
	<div class="lds-spin" style="width:100%;height:100%"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
	</div>
</div>
	)
};

export default Spinner;

