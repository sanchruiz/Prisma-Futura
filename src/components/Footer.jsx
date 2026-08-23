function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; <span>{currentYear}</span> Prisma Futura SAS. Transformamos visiones en realidades estratégicas.</p>
      </div>
    </footer>
  );
}

export default Footer;
