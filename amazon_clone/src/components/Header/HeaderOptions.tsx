interface HeaderOptionsProps {
  title?: string | number;
  subtitle?: React.ReactNode;
  item?: string | undefined;
}

const HeaderOptions: React.FC<HeaderOptionsProps> = ({
  title,
  subtitle,
  item,
}) => {
  return (
    <div
      key={Math.floor(Math.random() * 1000000)}
      className={item ? "header_shoppingBag header_option" : "header_option"}
    >
      <h5 className="optionSubtitle">{subtitle}</h5>
      <h3 className="optionTitle">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
