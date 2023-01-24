import ReactItem from './ReactItem';

function Favorites({favorites}) {
  return (
    <ul className="favorites">
      {favorites.map((item, index) => {
        //return <ReactItem img={item} />; // 에러 확인
        return <ReactItem img={item} key={index}  />;
      })}
    </ul>
  );
}

export default Favorites;