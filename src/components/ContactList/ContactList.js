import {ContactItem} from './ContactItem/ContactItem';
import PropTypes from 'prop-types'; 
import style from './ContactList.module.css';

const ContactList = ({filteredList, onDelete}) => {
    return (
        <ul className={style.filteredList}>
            {filteredList.map(({id, name, number}) => {
                return (
                    <ContactItem 
                    contact={{id, name, number}}
                    key={id}
                    onDelete={onDelete}
                    />
                );
            })}
        </ul>
    );
};

ContactItem.propTypes = {
    filteredContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDelete: PropTypes.func.isRequired,
  };
  
  export default ContactList;