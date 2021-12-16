import { Link } from "react-router-dom";
import DeleteComponent from "./app/DeleteComponent";
import { StoreData } from "./app/StoreContext";

const ImagesScreen = () => {
  return (
    <StoreData.Consumer>
      {({ state, dispatch }) =>
        !state.photos ? (
          <h2>Loading All Photos...</h2>
        ) : (
          state.photos.map((photo) => {
            return (
              <main className="card" key={photo.id}>
                <Link to={`/photo/${photo.id}`}>
                  {" "}
                  <div className="card-header">
                    <div className="card-image">
                      <img src={photo.url} alt="all photos" />
                    </div>
                    <div className="title">
                      <h4 className="">Title: </h4>
                      <blockquote>{photo.title}</blockquote>
                    </div>
                    <div className="thumbnail">
                      <img src={photo.thumbnailUrl} alt="photo thumbnail" />
                    </div>
                  </div>{" "}
                </Link>
                <DeleteComponent id={photo.id} />
              </main>
            );
          })
        )
      }
    </StoreData.Consumer>
  );
};

export default ImagesScreen;
