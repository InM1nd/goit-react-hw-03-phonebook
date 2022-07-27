import PropTypes from 'prop-types';
import style from './ContactFilter.module.css';

const Filter = ({title, value, onChange }) => {
    return (
        <label className={style.filterLabel}>
            {title}
            <input type="text" name="filter" value={value} onChange={onChange} />
        </label>
    );
};

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default Filter;