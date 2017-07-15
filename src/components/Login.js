import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin,userSignUp } from '../actions';

class Login extends Component{

  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps){
    console.log('login page props/nextProps/state on receive props :',
      this.props,nextProps,this.state
    );

    this.setState({
      signUp: nextProps.signUp ? true : false
    })
  }

  renderField(field){
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ""}`

    return(<div className={className}>
      <label>{field.label}</label>
      <input
        className = "form-control"
        type = "text"
        {...field.input}
      />
      <div className = "text-help">
        {touched ? error : ''}
      </div>

    </div>);
  }

  onSubmit(values){
    // console.log("values on submit : ",values);
    if (this.state.signUp){
      this.props.newUserLogin(values, () => {
      });
    }else{
      this.props.userLogin(values, () => {
      });
    }
    this.props.history.push('/Posts');
  }

  render(){
    const {handleSubmit} = this.props;

    let heading;
    if (this.state && this.state.signUp){
      heading = <h3>Sign Up for an Account</h3>
    }else{
      heading = <h3>Log In to your Account</h3>
    }

    return(
      <div>
        {heading}
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="User Name"
            name="username"
            component={this.renderField}
          />
          <Field
            label="User Password"
            name="password"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/Posts" className="btn btn-danger"> Cancel </Link>
        </form>
      </div>
    );
  }
}
  //validate called by redux-form
function validate(values){
  const errors = {};
  if (!values.username || values.username.length < 3) {
    errors.username = "Enter a name that is at least 3 characters long!";
  }
  if (!values.password){
    errors.password = 'Enter a password please'
  }
  return errors;
}

const mapStateToProps = (state) => {
  return {
    signUp:state.user.signUp
  };
}


export default reduxForm({
  validate,
  form: 'UserLoginForm'
})(
  connect(mapStateToProps,{userLogin})(Login)
);
