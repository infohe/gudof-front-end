import React from "react";
import ShopCards06 from "../Mosaic/ShopCards06";

const Wrapper = (props) => {
  const items = props.items || [];
  const pageType = props.pageType;

  return (
    <div>
      {items.map(
        (item, i) => (
          <ShopCards06
            key={i}
            items={items}
            Title={item.title}
            url={item.url}
            pageType={pageType}
          ></ShopCards06>
        )
        //   console.log(Category.title)
      )}
    </div>
  );
};

export default Wrapper;
