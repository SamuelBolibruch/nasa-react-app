export default function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainerˇ">
      <img className="bgImage" src={data.hdurl} alt={data.title || 'bg-image'} />
    </div>
  );
}
