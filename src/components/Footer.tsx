const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono">
          Designed & Built by{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            John Doe
          </a>
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2 font-mono">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
