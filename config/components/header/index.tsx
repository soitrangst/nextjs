import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on("routeChangeStart",()=> NProgress.start())

Router.events.on("routeChangeComplete",()=>NProgress.done())

Router.events.on("routeChangeError",()=>NProgress.done())



export default function Header() {
    return (
      <header className="header">
        <Link href="/">
          <img src="/static/logo.svg" alt="" className="header__logo" />
        </Link>
        <Link href="/">
          <h1 className="header__title">FishCastle</h1>
        </Link>
        <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
          <span className="header__price snipcart-total-price"></span>
        </a>
      </header>
    )
  }