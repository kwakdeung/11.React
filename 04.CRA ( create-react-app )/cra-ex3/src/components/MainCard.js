// event : onClick 등에서 C 대문자 주의 !!!
const MainCard = ({img, onHeartClick, alreadyFavorite}) => {        
  const heartIcon = alreadyFavorite ? "💖" : "🤍";
  return (
    <div className="main-card">
      <img src={img} alt='MainImage' style={{width:"400px"}} />
      <button onClick={onHeartClick}>{heartIcon}</button>
    </div>
  );
};

export default MainCard;