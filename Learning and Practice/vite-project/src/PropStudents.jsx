
import PropTypes from 'prop-types';

const style={
    border:"2px solid black",
    width:"520px",
    padding:"10px",
    margin:"10px",
}

function Student(props) {
    {/*We can also destructure it or use spread of es6*/ }

    return (
        <div style={style}>
        
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Students: { props.isStudent ? "Yes": "No"}</p>

        </div>

    )

}


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}

export default Student;