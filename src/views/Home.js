import img1 from "../assets/Scaffold-rafiki.svg";
import img2 from "../assets/Architect-amico.svg";
import Section from "../components/Section";
import Contact from "../components/Contact";
import "./Home.css";

function Home() {
  const info = [
    {
      name: "main",
      title: "Consultoria Estratégica para alavancar o seu negócio",
      text: "Somos uma empresa formada por alunos da graduação da UFJF, que oferece projetos de consultoria personalizados, de acordo com a demanda de cada cliente, prezando pela construção conjunta de conhecimento e pela qualidade técnica.",
      img: img1,
      url: "https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      color: "blueviolet",
      reverse: false,
    },
    {
      name: "info",
      title: "Sobre Nós",
      text: "Somos uma consultoria estratégica composta por alunos de todos os cursos de graduação da UFJF e que busca auxiliar pequenas e médias empresas a crescer, causando impacto positivo na sociedade. Somos uma empresa que sonha alto: queremos transformar a realidade de nossos clientes com nossos projetos, entregando resultados seniores, sem perder a vontade e brilho no olho júnior. Com o auxílio de nossos parceiros, como a Bain Company, Boston Consulting Group, ZX Ventures, entre outros, e de professores renomados da Fundação Getúlio Vargas, entregamos soluções completas e personalizadas para todas as dores dos nossos clientes. Fazemos parte do Núcleo da Mata e pretendemos expandir cada  vez mais nossa empresa!",
      img: img2,
      url: "https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      color: "green",
      reverse: true,
    },
  ];

  return (
    <>
      <div className="Home">
        <Section
          name={info[0].name}
          title={info[0].title}
          text={info[0].text}
          img={info[0].img}
          url={info[0].url}
          color={info[0].color}
          reverse={info[0].reverse}
        ></Section>
        <Section
          name={info[1].name}
          title={info[1].title}
          text={info[1].text}
          img={info[1].img}
          url={info[1].url}
          color={info[1].color}
          reverse={info[1].reverse}
        ></Section>
        <div className="div-contato">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default Home;