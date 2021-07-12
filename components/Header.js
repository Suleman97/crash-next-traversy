import headerStyles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        keep up to date with the latest dev news from our website.
      </p>
    </div>
  );
};

// export default Header;
