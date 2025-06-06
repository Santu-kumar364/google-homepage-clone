import "../css/Shortcuts.css";


const items = [
  {
    name: "Gmail",
    img: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  },
  {
    name: "YouTube",
    img: "https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png",
  },
  {
    name: "LinkedIn",
    img: "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico",
  },
  {
    name: "Google Drive",
    img: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png",
  },
  {
    name: "GitHub",
    img: "https://github.githubassets.com/favicons/favicon.png",
  },
  {
    name: "Twitter",
    img: "https://abs.twimg.com/favicons/twitter.ico",
  },
  {
    name: "Pixabay",
    img: "https://pixabay.com/favicon.ico",
  },
  {
    name: "Pexels",
    img: "https://pexels.com/favicon.ico",
  },
   
];

 
export default function Shortcuts() {
  return (
    <div className="shortcuts">
      {items.map((item) => (
        <div className="shortcut"  >
          <div className="icon-circle">
            <img src={item.img} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}




