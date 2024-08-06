import React, { useState } from "react";
import Img from "./img";
import Link from "@/components/link";

const BlogCard = ({ image, title, text ,buttonText,url}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="blog_share_box">
      <div className="bl_share_img">
        <Img src={image} alt={title} layout="responsive" />
      </div>
      <div className="blog_share_details">
        <h1>
          <Link href={url}>{title}</Link>
        </h1>
        {readMore ?
          <Link href={url}><p>{text}</p></Link>
          :
          <Link href={url}><p>{text.substring(0, 200)}</p></Link>}
        {text.length > 200 ? <span onClick={() => { setReadMore(!readMore) }}>{ readMore? "[-]" : "...[+]" }</span> : null}
        <br/>
        <Link href={url} className="btn-yellow_modified">
          {buttonText}
        </Link>
      </div>
      

    </div>
  );
};

export default BlogCard;
