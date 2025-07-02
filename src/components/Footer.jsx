import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Streamwave. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
