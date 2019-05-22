import React from "react";
import Navbar from "../src/components/Navbar";
import SearchForm from "../src/components/SearchForm";
import useMovies from "../src/hooks/movies";
import Feed from "../src/components/Feed";
import useNavigation from "./hooks/navigation";

const NAV_HEIGHT = 100;

const App = () => {
  const {
    value,
    popularList,
    searchMovies,
    favouriteList,
    favouriteMovie,
    isFavourite
  } = useMovies();

  const { variant, setVariant } = useNavigation();

  const displayFilters = [
    { id: "popular", text: "All movies", onClick: () => setVariant("popular") },
    {
      id: "favourites",
      text: `Favourites (${favouriteList.length})`,
      onClick: () => setVariant("favourites")
    }
  ];

  // const icons = ["😀", "🐬", "🦐"];

  // const FootBar = () => (
  //   <div
  //     style={{
  //       padding: 10,
  //       position: "fixed",
  //       bottom: 0,
  //       left: 0,
  //       right: 0,
  //       height: 50,
  //       display: "flex",
  //       flexDirection: "row",
  //       justifyContent: "space-between",
  //       alignItems: "center",
  //       backgroundColor: "#212121",
  //       zIndex: 2
  //     }}
  //   >
  //     {icons.map(item => (
  //       <span>{item}</span>
  //     ))}
  //   </div>
  // );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <FootBar /> */}
      <Navbar height={NAV_HEIGHT} buttons={displayFilters}>
        <SearchForm value={value} searchMovies={searchMovies} />
      </Navbar>
      <Feed
        popularList={popularList}
        favouriteMovie={favouriteMovie}
        isFavourite={isFavourite}
        favouriteList={favouriteList}
        navOffset={NAV_HEIGHT}
        variant={variant}
      />
    </div>
  );
};

export default App;
