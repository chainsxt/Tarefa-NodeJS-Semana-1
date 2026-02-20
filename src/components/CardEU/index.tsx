import styles from './styles.module.css';
import fotoJoImg from '../../assets/fotojo.JPEG';
import capaImg from '../../assets/capa.JPEG';

export default function CardEU() {
  return (
<div className={styles.container}>
    <img src={capaImg} 
        className={styles.capa} 
        alt="Capa" />
<div className={styles.profile}>
    <img
        src={fotoJoImg}
        className={styles.ft}
        alt="Foto de João Vitor"/>
<div className={styles.info}>
          <strong className={styles.nome}>João Vitor M.</strong>
          <div className={styles.subtitulo}>Dev. Front-End</div>
        </div>
      </div>
    </div>
  );
}