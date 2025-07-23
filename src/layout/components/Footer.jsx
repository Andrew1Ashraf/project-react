import '../../styles/footer.css'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center p-4">
        <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
