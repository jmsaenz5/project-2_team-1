const purchaseRequestForm = document.querySelector('create-request.js');

class ReactFormLabel extends React.Component {
	constructor(props) {
  		super(props);
 	}

	render() {
  		return(<label /label>)
 	}
}


class ReactForm extends React.Component {
	constructor(props) {
  		super(props);

  		this.state = {
   		name: '',
   		email: '',
   		subject: '',
   		message: ''
  		}
 	}
}

