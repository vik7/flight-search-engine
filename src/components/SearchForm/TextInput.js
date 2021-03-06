
import React from 'react';

export default class TextInput extends React.Component {
  static propTypes = {
    fieldName: React.PropTypes.string.isRequired,
    displayName: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
  };
  render = () => {
    return (
      <div className={`text-input form-item ${this.props.fieldName} ${this.props.hasError ? 'error' : ''}`}>
        <label htmlFor={this.props.fieldName}>{ `${this.props.displayName} *` }</label>
        <input type="text" name={this.props.fieldName} value={this.props.value}
          onChange={this.onChangeHandler} maxLength={15} required />
      </div>
    );
  };
  onChangeHandler = (event) => {
    this.props.onChange(this.props.fieldName, event.target.value);
  };
}
