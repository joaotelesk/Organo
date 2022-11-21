import "./CampoTexto.css";
interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio: boolean;
}

const CampoTexto = ({
  aoAlterado,
  label,
  obrigatorio,
  placeholder,
  valor,
}: CampoTextoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        required={obrigatorio}
        placeholder={placeholder}
        onChange={aoDigitado}
      ></input>
    </div>
  );
};

export default CampoTexto;
