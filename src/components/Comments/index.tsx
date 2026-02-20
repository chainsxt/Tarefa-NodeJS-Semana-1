import lixeiraImg from '../../assets/trash.png';
import like from '../../assets/like1.png';
import like2 from '../../assets/like2.png';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './styles.module.css';
import { useState } from 'react';

interface ComentarioProps {
    img: string;
    nome: string;
    conteudo: string;
    likesIniciais: number;
    publicadoEm: Date;
    onDeleteComment: () => void;
}

export default function Comentario({ img, nome, conteudo,likesIniciais, publicadoEm, onDeleteComment }: ComentarioProps) {
    const publicadoRelativo = formatDistanceToNow(publicadoEm, {
    addSuffix: true,
    locale: ptBR,
  });
    const [likeCount, setLikeCount] = useState(likesIniciais);
    const [hasLiked, setHasLiked] = useState(false);
    function handleLikeComment() {
    setLikeCount((state) => state + 1); 
    setHasLiked(true);
}

    function handleDeleteComment() {
    onDeleteComment();
  }
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={img} alt={`Foto de perfil de ${nome}`} />
            </div>
            <div className={styles.info}>
            <div>
            <strong>{nome}</strong>
            <time title={publicadoEm.toLocaleString()} className={styles.subtitulo}>
              {publicadoRelativo}
            </time>
          </div>
                 <button onClick={handleDeleteComment} className={styles.botaoExcluir} title="Deletar">
                            <img src={lixeiraImg} alt='deletar comentário' />
                 </button>
                <p>{conteudo}</p>
        
            <button className={styles.botaoLike} 
            onClick={handleLikeComment}
            disabled={hasLiked}
            >
                <img src={hasLiked ? like2 : like} alt='foto de um joinha!'/>
                {hasLiked ? 'Curtido' : 'Curtir'} • <span>{likeCount}</span>
            </button>
</div>
</div>     
    );
}