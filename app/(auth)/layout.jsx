const Layout = ({ children }) => {
    return(
        <div className="w-full min-h-screen flex items-center justify-center bg-secondary-pattern bg-cover">
            {children}
        </div>
    )
}

export default Layout;