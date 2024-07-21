import { NextPage } from "next";

const TestRemoteHook: NextPage = () => {
  return (
    <>
      <div>
        Page with custom remote hook. You must see text in red box below:
      </div>
      <div style={{ border: "1px solid red", padding: 5 }}>
        blank text for now
      </div>
    </>
  );
};

export default TestRemoteHook;
