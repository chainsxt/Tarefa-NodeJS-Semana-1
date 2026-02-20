import { useState, ChangeEvent } from 'react';
import styles from './styles.module.css';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Comentario from '../Comments';
import fotoJo from '../../assets/fotojo.JPEG';


interface ComentarioData {
  id: number;
  nome: string;
  img: string;
  conteudo: string;
  likesIniciais?: number;
  publicadoEm: Date;
}

interface CardFeedProps {
  fotoAutor: string;
  nome: string;
  subtitulo: string;
  conteudo: string;
  publicadoEm: Date;
  comentariosIniciais?: ComentarioData[];
}
export default function CardFeed({ fotoAutor, nome, subtitulo, conteudo, publicadoEm,comentariosIniciais = [] }: CardFeedProps) {
    const publicadoRelativo = formatDistanceToNow(publicadoEm, {
    addSuffix: true,
    locale: ptBR,
  });
  const [comentarios, setComentarios] = useState<ComentarioData[]>(comentariosIniciais);
  const [novoComentarioTexto, setNovoComentarioTexto] = useState('');

function handleTextoChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNovoComentarioTexto(event.target.value);
  }
  function handlePublicarComentario() {
    if (novoComentarioTexto.trim() === "") return;
    const novoComentario: ComentarioData = {
      id: Date.now(),
      nome: "João Vitor M.",
      img: fotoJo,
      conteudo: novoComentarioTexto,
      likesIniciais: 0,
      publicadoEm: new Date(),
    };
    setComentarios([...comentarios, novoComentario]);
    setNovoComentarioTexto('');
  }

  function deleteComment(idToDelete: number) {
    setComentarios(comentarios.filter(c => c.id !== idToDelete));
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={fotoAutor} className={styles.ft} alt={`Foto de ${nome}`} />
        <div className={styles.info}>
          <strong className={styles.nome}>{nome}</strong>
          <span className={styles.subtitulo}>{subtitulo}</span>
          <time title={publicadoEm.toLocaleString()} className={styles.texto}>
            {publicadoRelativo}
          </time>
        </div>
      </div>
      <div className={styles.post}>{conteudo}</div>
      <div className={styles.comment}>
        <strong>Deixe seu feedback:</strong>
        <textarea
          placeholder="Escreva um comentário..."
          value={novoComentarioTexto}
          onChange={handleTextoChange}
          required
        />
        <button 
          onClick={handlePublicarComentario} 
          disabled={novoComentarioTexto.length === 0}
        >
          Comentar
        </button>
      </div>
<div className={styles.listaDeComentarios}>
  {comentarios.map((comentario) => (
    <Comentario
      key={comentario.id}
      nome={comentario.nome}
      img={comentario.img}
      conteudo={comentario.conteudo}
      likesIniciais={comentario.likesIniciais ?? 0}
      publicadoEm={comentario.publicadoEm}
      onDeleteComment={() => deleteComment(comentario.id)}
    />
  ))}
</div>
    </div>
  );
}