import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                <div style={{"margin" :"0 auto"}} >
                    <a href="https://hahnsoftware.com" className="navbar-brand">
                        Employee Management System
                    </a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent