import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class  SignUp  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayNmae: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const {displayNmae, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Pasword domt' match");
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayNmae });

            this.setState({
                displayNmae: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {

            console.error(error);
            
        }
    }

    handleChange =  event => {
        const {name, value } = event.target;

        this.setState({ [name]: value });
    }
    render() {
        const {displayNmae, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput 
                        type="text" 
                        name="displayNmae" 
                        value={displayNmae} 
                        required 
                        label="Display Name"
                        handleChange={this.handleChange}
                 />
                <FormInput 
                        type="email" 
                        name="email" 
                        value={email} 
                        required 
                        label="Email"
                        handleChange={this.handleChange}
                 />
                <FormInput 
                        type="password" 
                        name="password" 
                        value={password} 
                        required 
                        label="Password"
                        handleChange={this.handleChange}
                 />
                <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        required 
                        label="Confirm Password"
                        handleChange={this.handleChange}
                 />
                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
 };

export default SignUp;