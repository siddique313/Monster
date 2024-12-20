import img1 from "../assets/pic5.png";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import NewsContact from "./NewsContact";
import NewsItem from "./NewsItem";
export default function News() {
  return (
    <div className="px-8">
      <div className="text-center py-20">
        <h1 className="text-4xl">Latest blog posts</h1>
      </div>
      <div className="flex flex-shrink-0 lg: gap-6">
        <NewsItem
          imge={img1}
          date={"07/04"}
          title={"Benefits of Async/Await"}
          paragraph={
            "Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and..."
          }
        />
        <NewsItem
          imge={img1}
          date={"07/17"}
          title={"Key Considerations of iPaaS"}
          paragraph={
            "Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster..."
          }
        />
        <NewsItem
          imge={img1}
          date={"07/22"}
          title={"Never Stop Optimizing Your Code"}
          paragraph={
            "In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query..."
          }
        />
      </div>
      <div className="flex gap-3 mt-28 mb-9">
        <NewsContact
          icon={<MdOutlinePhoneIphone />}
          contact={"+1 323-913-4688"}
          number={"+1 323-888-4554"}
        />
        <NewsContact
          icon={<RiHome2Line />}
          contact={"4730 Crystal Springs Dr,"}
          number={"Los Angeles, CA 90027"}
        />
        <NewsContact
          icon={<TbMessage2 />}
          contact={"mail@demolink.org"}
          number={"info@demolink.org"}
        />
      </div>
    </div>
  );
}
