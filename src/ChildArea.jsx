import { memo } from "react";

export const ChildArea = memo((props) => {
  console.log("更新されました");
  const { open, close } = props;
  return (
    <>
      {open ? (
        <div>
          <p>子コンポーネント</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
