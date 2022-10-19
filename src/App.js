import React from "react";
import "./App.css";
import Option from "./components/option/Option";
import Header from "./components/header/Header";
import "./components/header/Header.css";
import Find from "./components/find/Find";
import Trending from "./components/trending/Trending";
import { TrendingData } from "./components/trending/TrendingData";
import Like from "./components/like/Like";
import { LikeData } from "./components/like/LikeData";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="option-list">
        <Option heading="Căn Hộ"></Option>
        <Option heading="Nhà Trọ"></Option>
        <Option heading="Nguyên Căn"></Option>
        <Option heading="Mặt Bằng"></Option>
        <Option heading="KTX/Ở Ghép"></Option>
      </div>
      <div>
        <Find />
      </div>
      <div>
        <h1
          style={{
            marginTop: "40px",
            fontSize: "20px",
          }}
        >
          Xu hướng tìm kiếm
        </h1>
      </div>
      <div className="trending">
        {TrendingData.map((item, index) => (
          <Trending key={item.id} img={item.img}></Trending>
        ))}
      </div>
      <div>
        <h1
          style={{
            marginTop: "40px",
            fontSize: "20px",
          }}
        >
          Bạn có thể thích
        </h1>
      </div>
      <div className="like">
        {LikeData.map((item, index) => (
          <Like key={item.id} image={item.image}></Like>
        ))}
      </div>
      <div className="like">
        {LikeData.map((item, index) => (
          <Like key={item.id} image={item.image}></Like>
        ))}
      </div>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
