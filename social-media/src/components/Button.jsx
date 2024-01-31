import './Button.scss';

function Button({ msg, sign }) {
    return (
        <div>
            <button className='custom-button'>
                {sign && <span> + </span>}
                <span>{msg}</span>
            </button>
        </div>
    );
}

export default Button;
