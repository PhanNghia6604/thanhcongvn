import React from 'react';
import styles from './Service.module.css'; // Import CSS module

function Service() {
  return (
    <div className={styles.service}>
      <h1 className={styles.title}>Dịch Vụ Của Chúng Tôi</h1>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <img
            src="https://phucgiacons.com/wp-content/uploads/2017/10/dich-vu-thi-cong-xay-dung.jpg"
            alt="Dịch vụ 1"
            className={styles.serviceImage}
          />
          <div className={styles.serviceContent}>
            <h2 className={styles.serviceTitle}>Thiết Kế Nhà Ở</h2>
            <p className={styles.serviceDescription}>
              Cung cấp dịch vụ thiết kế nhà ở chất lượng, sáng tạo, phù hợp với nhu cầu và phong cách sống của bạn.
            </p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.sPmsJxQggcQ8E0QjpnGxBgHaEn&w=802&h=500&rs=1&pid=ImgDetMain"
            alt="Dịch vụ 2"
            className={styles.serviceImage}
          />
          <div className={styles.serviceContent}>
            <h2 className={styles.serviceTitle}>Xây Dựng Nhà Xưởng</h2>
            <p className={styles.serviceDescription}>
              Chúng tôi xây dựng nhà xưởng đảm bảo chất lượng, hiệu quả và bền vững cho mọi ngành công nghiệp.
            </p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/573cd86ce32140cc40f58da1/5aed3ff9-01dd-41b5-8238-745f068bcc69/61fa468615b6c657c0738548_design-build.jpeg"
            alt="Dịch vụ 3"
            className={styles.serviceImage}
          />
          <div className={styles.serviceContent}>
            <h2 className={styles.serviceTitle}>Giám Sát Công Trình</h2>
            <p className={styles.serviceDescription}>
              Dịch vụ giám sát công trình từ đầu đến cuối, đảm bảo chất lượng và tiến độ đúng kế hoạch.
            </p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.QmI0urB5F5_NFof-ZLYU7QHaE8&w=600&h=400&rs=1&pid=ImgDetMain"
            alt="Dịch vụ 4"
            className={styles.serviceImage}
          />
          <div className={styles.serviceContent}>
            <h2 className={styles.serviceTitle}>Bảo Trì Và Sửa Chữa</h2>
            <p className={styles.serviceDescription}>
              Chúng tôi cung cấp dịch vụ bảo trì và sửa chữa công trình, giúp duy trì tuổi thọ và hiệu quả lâu dài.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
