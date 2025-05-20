import "../scss/layouts/layout.scss";

function Layout({ children }) {
    return (
        <div className="layout">
            <main className="main-content">{children}</main>
        </div>
    );
}

export default Layout;
