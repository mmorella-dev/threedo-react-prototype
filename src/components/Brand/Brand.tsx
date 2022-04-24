import './Brand.css';

const Brand = ({ logo, title, subtitle }: BrandProps) => (
  <div className="brand">
    <img width="100" alt={`${title} logo`} src={logo} />
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

type BrandProps = {
  logo: string;
  title: string;
  subtitle: string;
};

export default Brand;
