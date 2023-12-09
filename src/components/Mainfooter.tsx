export default function Mainfooter(){
    let dateon = new Date().getFullYear();
    return(<div>
        <footer>
            <h1 className="footer-text">Aptiglide</h1>
            <ul className="footer-ref">
                <span>Quick links</span>
                <li>Quizzes</li>
                <li>Reference</li>
                <li>Leaderboard</li>
                <li>Practice Tests</li>
            </ul>
            <ul className="footer-ref2">
                <span>About us</span>
                <li>Our Team</li>
                <li>Newsroom</li>
                <li>Security</li>
                <li>Privacy Policy</li>
            </ul>
            <h4 className="copyright">&copy;Aptiglide {dateon}</h4>
        </footer>
    </div>);
}