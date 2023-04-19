import { useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { BsCamera, BsController, BsCameraVideo } from "react-icons/bs";
import { HiOutlineKey } from "react-icons/hi";

export default function MenuList() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`menu ${isActive ? "active" : ""}`}>
      <div className="toggle" onClick={handleMenuClick}>
        <AiOutlinePlus />
      </div>
      <li style={{ "--i": 0 }}>
        <a href="#">
          <AiOutlineHome />
        </a>
      </li>
      <li style={{ "--i": 1 }}>
        <a href="#">
          <AiOutlineUser />
        </a>
      </li>
      <li style={{ "--i": 2 }}>
        <a href="#">
          <AiOutlineSetting />
        </a>
      </li>
      <li style={{ "--i": 3 }}>
        <a href="#">
          <AiOutlineMail />
        </a>
      </li>
      <li style={{ "--i": 4 }}>
        <a href="#">
          <HiOutlineKey />
        </a>
      </li>
      <li style={{ "--i": 5 }}>
        <a href="#">
          <BsCameraVideo />
        </a>
      </li>
      <li style={{ "--i": 6 }}>
        <a href="#">
          <BsController />
        </a>
      </li>
      <li style={{ "--i": 7 }}>
        <a href="#">
          <BsCamera />
        </a>
      </li>
    </div>
  );
}
