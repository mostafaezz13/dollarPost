import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Who We Are", path: "/who-we-are" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <span className="font-display text-base tracking-[0.2em] text-foreground/40 uppercase">
          DOLLAR
        </span>
        
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
