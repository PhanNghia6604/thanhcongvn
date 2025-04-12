import React from 'react';
import styles from './Blog.module.css';  // Import CSS module

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Các bước quan trọng trong xây dựng nhà ở",
      content: "Xây dựng nhà ở là một quá trình phức tạp. Đầu tiên, bạn cần chuẩn bị các giấy tờ pháp lý, sau đó chọn nhà thầu uy tín, và cuối cùng là giám sát công trình...",
      author: "Thành Công VN",
      date: "2025-04-01",
      image: "https://azb.vn/files/2022/08/27/024553-2_Cong%20ty%20Co%20phan%20AZB_Nha%20thau%20xay%20dung_Tong%20thau%20thiet%20ke%20va%20thi%20cong_Ky%20su%20xay%20dung.jpg",
      link: "/post/1"
    },
    {
      id: 2,
      title: "Tại sao cần chọn vật liệu xây dựng chất lượng?",
      content: "Vật liệu xây dựng là yếu tố quyết định đến độ bền của công trình. Việc chọn đúng vật liệu không chỉ giúp tiết kiệm chi phí mà còn đảm bảo sự an toàn...",
      author: "Thành Công VN",
      date: "2025-03-28",
      image: "https://hiu.vn/wp-content/uploads/2022/02/nganh-ky-thuat-xay-dung-ra-truong-lam-gi-1.jpg",
      link: "/post/2"
    },
    {
      id: 3,
      title: "Cách lựa chọn nhà thầu xây dựng phù hợp",
      content: "Lựa chọn nhà thầu xây dựng là bước quan trọng để đảm bảo tiến độ và chất lượng công trình. Cần lưu ý đến các yếu tố như uy tín, kinh nghiệm và giá cả hợp lý...",
      author: "Thành Công VN",
      date: "2025-03-20",
      image: "https://dobockhoiluong.com/wp-content/uploads/2015/12/3p6l5Um.jpg",
      link: "/post/3"
    },
    {
      id: 4,
      title: "Xây dựng nhà thông minh – Cập nhật xu hướng mới",
      content: "Nhà thông minh là một xu hướng đang ngày càng được ưa chuộng. Với việc ứng dụng công nghệ IoT, việc điều khiển ánh sáng, nhiệt độ hay các thiết bị gia đình trở nên đơn giản và tiện lợi...",
      author: "Thành Công VN",
      date: "2025-04-05",
      image: "https://baohiempvi.com/wp-content/uploads/2021/08/tai-nan-cong-nhan-xay-dung.jpg",
      link: "/post/4"
    },
    
  ];

  return (
    <div className={styles.blog}>
      <h1 className={styles.titleBlog}>Bảng tin</h1>
      <div className={styles.blogPosts}>
        {posts.map(post => (
          <div key={post.id} className={styles.blogPost}>
            <h2 className={styles.blogPostTitle}>{post.title}</h2>
            <p className={styles.postDate}>Ngày đăng: {post.date}</p>
            <p className={styles.postAuthor}>Tác giả: {post.author}</p>
            <img src={post.image} alt={post.title} className={styles.blogPostImage}/>
            <p className={styles.blogPostDescription}>{post.content}</p>
            <a href={post.link} className={styles.readMore}>Đọc thêm...</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
