import { useState } from "react";

export const Carousel = (props) => {
  const { images } = props;
  const [active, setActive] = useState(0)

  const onClickIndex = (index) => {
    setActive(index);
  }

  return (
    <div className="carousel">
      <img src={images[active]} alt="carousel main image" data-testid="carousel-main-image" />
      <div style={{
        display: "flex",
        gap: "10px",
      }}>
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <div key={`carousel-iamge-${index}`}
            style={{
              width: "100px",
              height: "60px",
              overflow: "hidden",
              backgroundColor: "#ccc",
              display: "flex",
              alignItems: "center",
              borderRadius: "6px",
              border: index === active ? "2px solid yellow" : "none",
              opacity: index === active ? ".5" : "1",
            }}>
            <img
              src={photo}
              className={index === active ? "active" : ""}
              alt="carousel thumbnail"
              onClick={() => onClickIndex(index)}
              data-testid={`thumbnail-${index}`}
              style={{
                width: "100%",
              }}

            />
          </div>
        ))}
      </div>
    </div>
  );
}
