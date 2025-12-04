import "../css/Footer.css"

function Footer() {
    
    return (
        <footer>
            <div className="social-icons">
                <a href="https://www.facebook.com/gobiernonuevoleon/">
                    <img src="/icons/logo de facebook.svg" alt="Facebook" className="social-icon"/>
                </a>
                <a href="https://www.instagram.com/nuevoleonmx/">
                    <img src="/icons/instagramlogo.svg" alt="Instagram" className="social-icon instagram-icon"/>
                </a>
                <a href="https://x.com/nuevoleon">
                    <img src="/icons/twitterlogo.svg" alt="Twitter" className="social-icon twitter-icon"/>
                </a>
                <a href="https://t.me/gobnl">
                    <img src="/icons/telegramlogo.svg" alt="Telegram" className="social-icon telegram-icon"/>
                </a>
                <a href="https://www.tiktok.com/@nuevonlmx">
                    <img src="/icons/tiktoklogo.svg" alt="TikTok" className="social-icon tiktok-icon"/>
                </a>
                <a href="https://www.youtube.com/user/GobiernoNuevoLeon">
                    <img src="/icons/youtubelogo.svg" alt="YouTube" className="social-icon"/>
                </a>
            </div>
            <p className="copyright">© 2024 Hecho en Nuevo León. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer