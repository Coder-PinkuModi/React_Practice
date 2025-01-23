//REMEMBER: We can also sort items or filter them with javascript

import PropTypes from "prop-types"

const styleContainer = {
    width: "25%",
    display:"flex",
    backgroundColor: "rgba(134, 241, 206, 0.956)",
    flexDirection:"column",
    border: "2px solid black",
    alignItems: "center",
    cursor:"pointer"
}


const styleheading = {
    display: "inline-block",
    margin:"0px",
    padding:"2px",
}


const styleItems={
    fontSize:"1.5rem",
}

function ListRender({ items, category }) {
    return (
        <div style={styleContainer}>
            <h2 style={styleheading}>{category}</h2>
            {items.map((item, index) => <li style={styleItems} key={index}><p> {item.name}:&nbsp; {item.calories} </p></li>)}
        </div>
    )
}

ListRender.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            calories: PropTypes.number,
        })
    ),
    category: PropTypes.string
}
ListRender.defaultProp = {
    items: [],
    category: "Category",
}

export default ListRender;