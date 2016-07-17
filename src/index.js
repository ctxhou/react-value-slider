import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ValueSlider extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      value: 0
    }
  }

  onChange(e) {
    const {data} = this.props;
    const value = e.target.value;
    this.setState({value});
    this.props.onChange(data[value]);
  }

  changeValue(value) {
    this.setState({value})
  }

  render() {
    const {data, style} = this.props;
    const {value} = this.state;
    return (
      <input type="range" 
             name="points" 
             min="0" 
             max={data.length - 1} 
             value={value}
             style={style}
             onChange={this.onChange}/>
    )
  }
}


