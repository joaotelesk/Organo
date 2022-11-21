import { Icolabodaor } from "../../compartinhado/interfaces/IColaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  colaboradores: Icolabodaor[];
}
const Time = ({
  colaboradores,
  corPrimaria,
  corSecundaria,
  nome,
}: TimeProps) => {
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
