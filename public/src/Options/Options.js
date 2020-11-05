import React from 'react'
import './Options.css'

function Options (props) {
	return (
		<React.Fragment>
      <option className={'Options'}>{props.type}</option>
    </React.Fragment>
	)
}

export default Options