import Header from "./components/Header";
import CardEU from "./components/CardEU";
import "./styles/globals.css";
import CardFeed from "./components/CardFeed";
import damon from './assets/damon.jpg'
import sigrid from './assets/sigrid.jpg'

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        padding: '2rem', 
        gap: 130 
      }}>
        <CardEU />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
          
          <CardFeed 
            fotoAutor={damon}
            nome="Damon Albarn"
            subtitulo="Britpop"
            conteudo={`Lorem ipsum
          
            dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 

            Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!`}
            publicadoEm={new Date('2026-02-20 12:00:00')}
            
          />
          <CardFeed 
            fotoAutor={sigrid}
            nome="Sigrid Solbakk"
            subtitulo="Electropop"
            conteudo={`Lorem ipsum
        
            dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 

            Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!`}
            publicadoEm={new Date('2026-02-20 12:00:00')}
            comentariosIniciais={[
  { 
    id: 1, 
    nome: "Zara Larsson", 
    img: "https://i.scdn.co/image/ab6761610000e5eb11be9310ef4b23734c13b5c8", 
    conteudo: "Est aspernatur quis eos natus dicta et internos. Midnight Sun",
    likesIniciais: 20,
    publicadoEm: new Date('2026-02-20 14:00:00'),
  },
  { 
    id: 2, 
    nome: "Max Martin", 
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/MaxMartin.jpg/960px-MaxMartin.jpg",
    conteudo: "Est aspernatur quis eos natus dicta et internos",
    likesIniciais: 15,
    publicadoEm: new Date('2026-02-20 14:00:00'),
  }
]}
          />

        </div>
      </div>
    </div> 
  );
}