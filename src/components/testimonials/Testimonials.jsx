import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://petapixel.com/assets/uploads/2019/02/download-4-800x800.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "Very helpful when building my website, I now have my ecommerce store built from scratch.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of Detla",
      img:
        "https://pbs.twimg.com/media/DzhmtFBWsAACBSN.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Without doubt one of the most talented programmers out there. I always go back to Rafael when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "Asst. Manager at ALLANA",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Fantastic service and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
