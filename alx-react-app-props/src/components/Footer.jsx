function Footer() {

    const footerStyle = {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    };


    return (
        <footer style={footerStyle}>
            <p>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
