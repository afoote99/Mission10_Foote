import logo from './RealBowlLogo.png';

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h3 className="text-white">{props.title}</h3>
      </div>
    </header>
  );
}

export default Header;
