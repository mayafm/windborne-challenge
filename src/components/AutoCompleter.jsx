import React from 'react';
import '../App.css';

class AutoCompleter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            value: '',
        };
        
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    onChange(event) {
        this.setState({inputValue: event.target.value});
        if (this.props.options.includes(this.state.inputValue)) {
            this.setState({value: this.state.inputValue});
        }
        else {
            this.setState({value: ''});
        }
        console.log(this.state.value);
    }
    
    handleClick(event) {
        this.setState({value: event.target.textContent, inputValue: event.target.textContent});
        console.log(this.state.value);
    }
    
    filter(option) {
        if (this.state.inputValue === '') {
            return false;
        }
        if (option.indexOf(this.state.inputValue) === 0) {
            return true;
        }
        return false;
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type='text' onChange={this.onChange} value={this.state.inputValue} placeholder={this.props.defaultValue} />   
                </form>
                <ul>{this.props.options.filter(this.filter, this).map((option, index) => <li key={index} onClick={this.handleClick} >{option}</li>)}
                </ul>
            </div>
        );
    }
}

export default AutoCompleter;