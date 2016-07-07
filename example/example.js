import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ValueSlider from '../src';

class Example extends Component {

  onChange(v) {
    console.log(v)
  }

  onChangeInput(e) {
    const value = e.target.value;
    this.refs.slider.changeValue(value);
  }

  render() {
    const data = ["a", "b", "c", "d"];
    return (
      <div>
        <ValueSlider data={data}
                     ref='slider'
                     onChange={this.onChange}/>
        <input type="text" onChange={::this.onChangeInput}/>
      </div>
    )
  }
}


ReactDOM.render(
  <Example/>,
  document.getElementById('root')
);