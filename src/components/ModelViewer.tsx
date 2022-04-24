import './ModelViewer.css';

const ModelViewer = (props: ModelViewerProps) => (
  <img
    className="ModelViewer"
    src={props.image}
    alt={`Preview of ${props.filename}`}
  />
);

type ModelViewerProps = {
  image: string;
  filename: string;
};

export default ModelViewer;
