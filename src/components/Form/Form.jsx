import { Component } from 'react';
import { nanoid } from 'nanoid'
import css from './Form.module.css';

class Form extends Component {

  state = {
    name: '',
    number: '',
    };
   
    handleChange = ({target}) => {
        
        this.setState({
        [target.name]: target.value,
    })
    }
    handleSubmit = (e) => {
      e.preventDefault()
      const id = nanoid(5)
      const {name, number } = this.state
      this.props.onSubmit({ id, name, number })
      this.setState({
    name: '',
    number: '',
    })
    }

  render() {
    return (
      <form className={css.form} onSubmit = {this.handleSubmit}>
        <div className={css.wrapper} >
          <label className={css.label} htmlFor="nameInput">
            Name
          </label>
            <input
            className={css.input} 
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
                />
            </div>
            <div className={css.wrapper} >
            <label htmlFor="numberInput" className={css.label}>
            Number
          </label>
            <input
            className={css.input} 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        
      </form>
    );
  }
}

export default Form;