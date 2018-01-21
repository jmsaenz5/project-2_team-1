// React code to send emails upon submission of Create Request form

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

// Keeps track of any user changes
userChange = (e) => {
 let newState = {};

 newState[e.target.name] = e.target.value;

 this.setState(newState);
};


// Stores user changes
let userData = {
  formSender: this.state.name,
  formEmail: this.state.email,
  formSubject: this.state.subject,
  formMessage: this.state.message
}
$.ajax({
  url: '/create-request.js',
  dataType: 'json',
  type: 'POST',
  data: userData,
  success: function(data) {
  	if (confirm('Yes')) {
    	document.querySelector('.form-input').val('');
   	}
  },
  error: function(xhr, status, err) {
  	console.error(status, err.toString());
   	alert('There was some problem with sending your message.');
  }
 });

 