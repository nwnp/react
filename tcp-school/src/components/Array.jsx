import '../style.scss';

const bucketItems = [
  "세계 일주 여행",
  "스카이 다이빙",
  "오로라 구경하기",
  "마라톤 완주"
];

export const Array = () => {
  const bucketList = bucketItems.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="bucket-list">
      <h2>버킷 리스트</h2>
      <ul>{bucketList}</ul>
    </div>
  )
}