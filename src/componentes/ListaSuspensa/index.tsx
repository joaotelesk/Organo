import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  label: string;
  obrigatorio: boolean;
  valor: string;
  aoAlterado: (valor: string) => void;
  itens: string[];
}
const ListaSuspensa = ({
  label,
  aoAlterado,
  itens,
  obrigatorio,
  valor,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
