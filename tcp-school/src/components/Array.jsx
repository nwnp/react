import { useState } from 'react';
import '../style.scss';

export const Array = () => {
  const [items, setItems] = useState([
    { id: 0, name: "세계 일주 여행" },
    { id: 1, name: "스카이 다이빙" },
    { id: 2, name: "오로라 구경하기" },
    { id: 3, name: "마라톤 완주" }
  ]);
  const [inputText, setValue] = useState("");
  const [id, setId] = useState(4);
  
  const onChange = (e) => setValue(e.target.value);
  const onClick = () => {
    setItems(items.concat({
      id,
      name: inputText
    }));
    setId(id + 1);
    setValue("");
  }

  const bucketList = items.map((item, idx) => <li key={idx}>{idx + 1}. {item.name}</li>)

  return (
    <div className="bucket-list">
      <h2>버킷 리스트</h2>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{bucketList}</ul>
    </div>
  )
}