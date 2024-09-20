export default function RollerText({ textArr }) {
  return (
    <div className="rollerText inline-flex justify-center items-center text-[40px]">
      <div className="font-medium text-syRed">console</div>
      <div className="font-medium text-white">.</div>
      <div className="font-medium text-syBlue">log</div>
      <div className="font-medium text-yellow-400">("</div>
      <div className="roller">
        {textArr?.map((item, index) => (
          <p key={index} className="text">
            {item}
          </p>
        ))}
      </div>
      <div className="closure font-medium text-yellow-400">");</div>
    </div>
  );
}
