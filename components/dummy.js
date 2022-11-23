import React from "react";

const Dummy = () => {
  return (
    <>
      {/* gobal keyword added to be used anywhere in all file */}
      <style jsx global>{`
        .dummy {
          color: red;
          background: yellow;
        }
      `}</style>
      <div className="dummy">This is Dummy Component</div>
    </>
  );
};

export default Dummy;
