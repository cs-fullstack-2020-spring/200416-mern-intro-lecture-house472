import React, { Component } from 'react'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            yearReleased: 0,
            movieArray: []

        }
    }

    //add array test
    componentDidMount = () => {
        this.loadData();

    }
    loadData = async () => {
        let response = await fetch('/api');
        let json = await response.json();
        console.table(json)
        this.setState({movieArray : json})
    }

    handleChange = (event) => {
        if (event.target.name == "title") {
            this.setState({ title: event.target.value });
        } else if (event.target.name == "yearReleased") {
            this.setState({ yearReleased: event.target.value });
        }
    }

    handleSubmission = async (event) => {
        event.preventDefault();
        let formData ={
            title: this.state.title,
            yearReleased: this.state.yearReleased
        }
        let response = await fetch('/api', {
            method: "POST",
            headers : {
                'Accept' :'application/json',
                "Content-type" : 'application/json'
            },
            body : JSON.stringify(formData)
           
        })
        let json = await response.json();
        console.log(json)
        // console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1>Simple MERN App</h1>
                <form action="">
                    <fieldset>
                        <legend>Form</legend>
                        <label htmlFor="title">Movie Title</label>
                        <input type="text" name="title" id="" value={this.state.title} onChange={this.handleChange} />

                        <label htmlFor="yearReleased">Movie Title</label>
                        <input type="text" name="yearReleased" id="" value={this.state.yearReleased} onChange={this.handleChange} />

                        <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>

                </form>

                <div>
                    {
                        this.state.movieArray.map((movie, index) => {
                            return (
                                <div key={movie._id}>
                                   Title: {movie.title}
                                    <br/>
                                   Year: {movie.yearReleased}
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )          
    }
}

export default AppContainer