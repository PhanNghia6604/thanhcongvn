import React from 'react';
import styles from './Home.module.css'; // Import CSS module
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}>
        {/* Sử dụng Typewriter để tạo hiệu ứng gõ chữ cho tiêu đề */}
        <h1 className={styles.title}>
          <Typewriter
            options={{
              strings: ["Công ty TNHH Xây Dựng Thành Công VN"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Sử dụng Typewriter để tạo hiệu ứng gõ chữ cho mô tả */}
        <p className={styles.description}>
          Chúng tôi chuyên tư vấn thiết kế miễn phí, hỗ trợ thủ tục giấy phép xây dựng, thi công và hoàn công các công trình nhà phố, nhà xưởng, nhà trọ. Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang đến những công trình chất lượng, đúng tiến độ và tiết kiệm chi phí.
        </p>

        {/* Nút gọi hành động */}
        <button className={styles.callToAction}>Liên hệ ngay để bắt đầu công trình lý tưởng của bạn!</button>
      </div>
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/bathanh.nguyen.7547" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
          </a>
          <a href="mailto:example@gmail.com">
            <img src="https://img.icons8.com/?size=100&id=3AYCSzCO85Qw&format=png&color=000000" alt="Email" />
          </a>
          <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000" alt="Zalo" />
          </a>
        </div>
        <div className={styles.contactInfo}>
          <p>Số điện thoại: 0914 209 488 - 0986 391 038</p>
          <p>Designed by PhanNghia - 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
