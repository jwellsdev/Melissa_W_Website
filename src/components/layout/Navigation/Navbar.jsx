import { useState } from "react";
import styles from "./Navbar.module.css";

// import logoImage from "../../../assets/images/meli-reads-it-all.jpg";
import { socialLinks } from "../../../data/socialLinks";
import { shoppingLinks } from "../../../data/shoppingLinks";

const primaryLinks = [
  { id: "about", label: "About", href: "#about" },
  { id: "social", label: "Social" }, // dropdown
  { id: "shopping", label: "Shop My Links" }, // dropdown
  { id: "favorites", label: "Favorites", href: "#favorites" },
  { id: "email", label: "Email", href: "#email" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const socialSubmenu = socialLinks.map((link) => ({
    label: link.name,
    href: link.url,
  }));

  const shoppingSubmenu = shoppingLinks.map((link) => ({
    label: link.name,
    href: link.url,
  }));

  const getSubmenu = (id) => {
    if (id === "social") return socialSubmenu;
    if (id === "shopping") return shoppingSubmenu;
    return null;
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarInner}>
        {/* Hamburger toggle – always visible */}
        <button
          type="button"
          className={styles.navToggle}
          onClick={() => {
            setIsOpen((prev) => !prev);
            setOpenSubmenu(null);
          }}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          <span className={styles.navToggleBar} />
        </button>
      </div>

      {isOpen && (
        <nav className={styles.navDrawer}>
          <ul className={styles.navList}>
            {primaryLinks.map((link) => {
              const submenu = getSubmenu(link.id);
              const hasSubmenu = !!submenu;
              const isSubOpen = openSubmenu === link.id;

              return (
                <li
                  key={link.id}
                  className={`${styles.navItem} ${
                    hasSubmenu ? styles.navItemHasSub : ""
                  } ${isSubOpen ? styles.navItemOpen : ""}`}
                  onMouseEnter={() => hasSubmenu && setOpenSubmenu(link.id)}
                  onMouseLeave={() => hasSubmenu && setOpenSubmenu(null)}
                >
                  {hasSubmenu ? (
                    <button
                      type="button"
                      className={styles.navDrawerLink}
                      onClick={() =>
                        setOpenSubmenu((prev) =>
                          prev === link.id ? null : link.id
                        )
                      }
                    >
                      {link.label}
                      {/* Drop down menu chevron */}
                      {/* <span
                        className={styles.navItemChevron}
                        aria-hidden="true"
                      >
                        ▾
                      </span> */}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={styles.navDrawerLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}

                  {hasSubmenu && (
                    <ul className={styles.navSubmenu}>
                      {submenu.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className={styles.navSubmenuLink}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
