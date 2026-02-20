import styles from './styles.module.css';
import logoImg from '../../assets/logo.png';

export default function Header(){
    return(
<header className={styles.header}>
<div className={styles.componentes}>
<img src={logoImg} alt='Logo do INJunior' className={styles.logo}/>
<h1 className={styles.title}>Feed</h1>
</div>
</header>
    )
}