import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import style from './App.module.css';

 class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = evt => {
    const {name, value} = evt.currentTarget;
    this.setState({[name]:value});
  };

  filteredList = () => {
    const filterNorm = this.state.filter.toLowerCase();
    return this.state.contacts
    .filter(contact=> {
      return contact.name.toLowerCase().includes(filterNorm);
    })
    .sort((a,b) => a.name.localeCompare(b.name));
  };
  
  formSubmit = ({name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const isContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContact) {
        alert(`${name} is already in contact`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ]
        }
      }
    })
  }

  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return { contacts: [...contactsAfterDelete] };
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={style.containerApp}>
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <div className={style.containerContacts}>
          <h2>Contacts</h2>
          <ContactFilter
            title="Find contact by name"
            onChange={this.handleFilterChange}
            value={filter}
          />

          <ContactList
            filteredList={this.filteredList()}
            onDelete={this.contactDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;