import React from 'react'
function Footer() {
    let footerStyle={
        position: "relative",
    top: "70vh",
    bottom:"0",
    width: "100%"
    }
    return (
        <footer className = "bg-dark text-light" style={footerStyle}>
            <p className="text-center py-3">
            Copyright &copy; MyTodos.com
            </p>
               
            
        </footer>
    )
}

export default Footer
