function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 bg-yellow-500 py-10">
      <p className="text-center">© {year} Yum Yum Pizza</p>
    </footer>
  );
}

export default Footer;
