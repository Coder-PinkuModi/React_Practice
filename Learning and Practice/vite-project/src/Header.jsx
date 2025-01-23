const aTagStyle={color:"white",textDecoration: "none"}

function Header() {
    return (
        <header>
            <h1>CodeMineSS</h1>
            <nav>
                <ul style={{
                    display: "flex",
                    flexWrap:"wrap",
                    alignItems:"center",
                    alignContent:"center",
                    justifyContent:"space-evenly",
                    justifyItems:"center",
                    justifySelf:"center",
                    listStyleType:"none",
                    backgroundColor:"blue",
                }}>
                    <li><a href="#" style={aTagStyle}>Home</a></li>
                    <li><a href="#" style={aTagStyle}>About</a></li>
                    <li><a href="#" style={aTagStyle}>Services</a></li>
                    <li><a href="#" style={aTagStyle}>Contacts</a></li>
                    <li><a href="#" style={aTagStyle}>SignUp</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header