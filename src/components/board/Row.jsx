import Tile from "./Tile";

const Row = ({ row }) => {
  return (
    <>
      {row.map((tile) => {
        return <Tile key={tile.id} tile={tile} />;
      })}
    </>
  );
};

export default Row;
