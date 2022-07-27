import React, {Component} from "react";
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      }

    handleInputChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
    }
    
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({ name: '', number: '' });
      };
    
    render(){
        const  {name, number} = this.state;
        return (
            <form className={style.form} onSubmit={this.handleSubmit}>
                <label className={style.form__label}> 
                    Name
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleInputChange}
                    />
                </label>
                <label className={style.form__label}l>
                    Number
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleInputChange}
                    />
                </label>
                <button className={style.addBtn} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
};




ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;