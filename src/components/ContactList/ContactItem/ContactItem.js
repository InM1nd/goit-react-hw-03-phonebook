import ProrTypes from 'prop-types';
import style from './ContacItem.module.css';

const ContactItem = ({contact, onDelete}) => {
    const {id, name, number} = contact;
    return (
        <li className={style.contactItem}>
            <p className={style.contact__name}>{name}</p>
            <p className={style.contact__number}>{number}</p>
            <button type="button" id={id} onClick={evt => {onDelete(evt.target.id);}}>
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    contact: ProrTypes.shape({
        id: ProrTypes.string.isRequired,
        name: ProrTypes.string.isRequired,
        number: ProrTypes.string.isRequired,
    }),
    onDelete : ProrTypes.func.isRequired,
}

export {ContactItem};