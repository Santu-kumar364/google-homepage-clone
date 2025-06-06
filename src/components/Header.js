import React from "react";
import "../css/Header.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

export default function Header() {
  return (
    <div className="header">
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <AppsIcon className="icon" />
      <Avatar className="avatar"
        src="https://media.licdn.com/dms/image/v2/D4D03AQFgdh63qTRMVw/profile-displayphoto-shrink_400_400/B4DZO7K3HnGoAg-/0/1734012007450?e=1754524800&v=beta&t=LCIN1TbWimPEBvPq5f8Qo1Jzd-oKhn5zavWtBYSKt24"
        alt="Santu"
      />
    </div>
  );
}
