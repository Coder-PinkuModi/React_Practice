function Footer(){
    const websiteName= "CodeMineSS";  {/*writing outside return statement js is possible normally*/}
    return (
        <footer>
            <p>&copy; {new Date().getFullYear() } {websiteName}</p> {/* curly braces are used to write the javascript code inside the return statement */}  
        </footer>
    )
}

export default Footer