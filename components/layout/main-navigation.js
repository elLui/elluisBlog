import Logo from "./logo";
import Link from "next/link";
import { nav_data } from "../../data/data";
import styles from './main-navigation.module.scss';

export default function MainNavigation () {


    return (<header className={ styles.header }>


        {/* notes about <Link>
                <a> wrapping a <li> in an anchor tag is not required <Link> handles it */ }
        <Link href={ '/' } className={ styles.logo }>
            <Logo/>

        </Link>
        <nav>
            <ul>
                { nav_data.map ((link) => {
                    return (<li key={ link.id }>
                        <Link href={ link.url }>
                            <span>{ link.icon }  </span>
                            <span>{ link.text }</span>
                        </Link>
                    </li>)
                }) }
                <li></li>
            </ul>
        </nav>


    </header>)
}