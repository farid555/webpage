import React, { Component } from 'react' //class based component
import { Container } from 'react-bootstrap'
import axios from 'axios'



class AddInfo extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            phone: '',
            password: '',


        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }



    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePhone(event) {
        this.setState({
            phone: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    onSubmit(event) {
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            username: '',
            email: '',
            phone: '',
            password: ''
        })
    }


    render() {
        return (

            <Container>

                <div>


                    <main className='py-3'>
                        <div className='container'>
                            <div className='form-div'>
                                <h3>Please fill up the form</h3>
                                <br />
                                <form onSubmit={this.onSubmit}>

                                    <input type='text'
                                        placeholder='Enter your First Name'
                                        onChange={this.changeFullName}
                                        value={this.state.fullName}
                                        className='form-control form-group'
                                    />

                                    <input type='text'
                                        placeholder='Enter your last Name'
                                        onChange={this.changeUsername}
                                        value={this.state.username}
                                        className='form-control form-group'
                                    />

                                    <input type='text'
                                        placeholder='Enter your Phone number'
                                        onChange={this.changePhone}
                                        value={this.state.phone}
                                        className='form-control form-group'
                                    />

                                    <input type='text'
                                        placeholder='Enter your e-mail'
                                        onChange={this.changeEmail}
                                        value={this.state.email}
                                        className='form-control form-group'
                                    />
                                    <div>
                                        <input type="submit" className="btn btn-outline-success" value='Submit' />

                                    </div>
                                </form>

                            </div  >
                        </div>
                    </main>
                </div>

            </Container>
        )
    }
}

export default AddInfo;